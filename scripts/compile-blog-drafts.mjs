import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const draftsDirectory = path.join(root, "docs", "blog-rascunhos");
const outputFile = path.join(root, "app", "conteudos", "editorial-articles.ts");
const publicationDate = "2026-10-15";

const articleSettings = {
  "01-licenca-vencida.md": { category: "Renovação ambiental", serviceSlug: "renovacao-e-regularizacao" },
  "02-auto-infracao.md": { category: "Autos e exigências", serviceSlug: "auto-de-infracao-ambiental" },
  "03-oficio-ambiental.md": { category: "Autos e exigências", serviceSlug: "diagnostico-e-enquadramento-ambiental" },
  "04-danc-cca-aua-licenca.md": { category: "Enquadramento ambiental", serviceSlug: "diagnostico-e-enquadramento-ambiental", publishedAt: "2026-09-04" },
  "05-oficina-mecanica.md": { category: "Licenciamento ambiental", serviceSlug: "licenciamento-ambiental" },
  "06-pgrs.md": { category: "Resíduos", serviceSlug: "planos-de-gerenciamento-de-residuos" },
  "07-transportadora.md": { category: "Resíduos e transporte", serviceSlug: "mtr-e-documentacao-de-residuos" },
  "08-residuos-limpeza-manutencao.md": { category: "Resíduos", serviceSlug: "planos-de-gerenciamento-de-residuos" },
  "09-custo-licenciamento.md": { category: "Planejamento do licenciamento", serviceSlug: "licenciamento-ambiental", publishedAt: "2026-10-11" },
  "10-checklist-renovacao.md": { category: "Renovação ambiental", serviceSlug: "renovacao-e-regularizacao", publishedAt: "2026-10-11" },
};

function textFromLines(lines) {
  return lines.join(" ").replace(/\s+/g, " ").trim();
}

function parseSectionContent(lines) {
  const paragraphs = [];
  const bullets = [];
  let table;
  let paragraphLines = [];
  const flushParagraph = () => {
    const paragraph = textFromLines(paragraphLines);
    if (paragraph) paragraphs.push(paragraph);
    paragraphLines = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph();
      continue;
    }
    if (trimmed.startsWith("|")) {
      flushParagraph();
      const cells = trimmed.split("|").slice(1, -1).map((cell) => cell.trim());
      if (cells.every((cell) => /^:?-{3,}:?$/.test(cell))) continue;
      if (!table) table = { headers: cells, rows: [] };
      else table.rows.push(cells);
      continue;
    }
    if (trimmed.startsWith("- ")) {
      flushParagraph();
      bullets.push(trimmed.slice(2).trim());
      continue;
    }
    paragraphLines.push(trimmed);
  }
  flushParagraph();
  return { paragraphs, ...(bullets.length ? { bullets } : {}), ...(table ? { table } : {}) };
}

function parseLinks(line) {
  return [...line.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map((match) => ({ label: match[1], url: match[2] }));
}

function parseDraft(fileName, raw) {
  const settings = articleSettings[fileName];
  if (!settings) throw new Error(`Sem configuração editorial para ${fileName}`);

  const metadata = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const existingUrl = metadata?.[1].match(/^url-existente:\s*(.+)$/m)?.[1]?.trim();
  const metaDescription = raw.match(/^\*\*Meta description:\*\*\s*(.+)$/m)?.[1]?.trim();
  const slugLine = raw.match(/^\*\*Slug:\*\*\s*(.+)$/m)?.[1] ?? "";
  const slug = slugLine.match(/`([^`]+)`/)?.[1]
    ?? existingUrl?.match(/\/conteudos\/([^/]+)/)?.[1];
  const mainTitleMatch = raw.slice(raw.indexOf("**Slug:**")).match(/\n# (.+)\r?\n/);
  if (!slug || !metaDescription || !mainTitleMatch) throw new Error(`Metadados incompletos em ${fileName}`);

  const articleTitle = mainTitleMatch[1].trim();
  const contentStart = raw.indexOf(mainTitleMatch[0], raw.indexOf("**Slug:**")) + mainTitleMatch[0].length;
  const remainder = raw.slice(contentStart);
  const firstSectionIndex = remainder.search(/^## /m);
  const introLines = remainder.slice(0, firstSectionIndex).split(/\r?\n/).filter(Boolean);
  const lead = textFromLines(introLines);
  const body = remainder.slice(firstSectionIndex);
  const faqIndex = body.search(/^## Perguntas frequentes\s*$/m);
  const sectionsSource = body.slice(0, faqIndex);
  const afterFaq = body.slice(faqIndex);
  const conclusionMatch = afterFaq.match(/^## Próximo passo\s*\r?\n([\s\S]*?)(?=^\*\*Links internos sugeridos:)/m);
  const conclusion = conclusionMatch ? textFromLines(conclusionMatch[1].split(/\r?\n/).filter(Boolean)) : undefined;

  const sectionMatches = [...sectionsSource.matchAll(/^## (.+)\r?\n([\s\S]*?)(?=^## |(?![\s\S]))/gm)];
  const sections = sectionMatches.map((match) => ({
    title: match[1].trim(),
    ...parseSectionContent(match[2].split(/\r?\n/)),
  }));

  const faqMatch = afterFaq.match(/^## Perguntas frequentes\s*\r?\n([\s\S]*?)(?=^## Próximo passo)/m);
  const faq = faqMatch ? [...faqMatch[1].matchAll(/^### (.+)\r?\n([\s\S]*?)(?=^### |(?![\s\S]))/gm)].map((match) => ({
    question: match[1].trim(),
    answer: textFromLines(match[2].split(/\r?\n/).filter(Boolean)),
  })) : [];

  const relatedLine = raw.match(/^\*\*Links internos sugeridos:\*\*\s*(.+)$/m)?.[1] ?? "";
  const relatedLinks = parseLinks(relatedLine).map(({ label, url }) => ({ label, href: url }));
  const sourcesLine = raw.match(/^\*\*Fontes oficiais para revisão final:\*\*\s*(.+)$/m)?.[1] ?? "";
  const sources = parseLinks(sourcesLine).map(({ label, url }) => ({ label, url }));
  const publishedAt = settings.publishedAt ?? publicationDate;
  const isRevision = Boolean(existingUrl && existingUrl !== "não");

  if (faq.length < 4 || relatedLinks.length < 3 || sources.length < 2) {
    throw new Error(`Conteúdo incompleto em ${fileName}: FAQ ${faq.length}, links ${relatedLinks.length}, fontes ${sources.length}`);
  }

  return {
    slug,
    category: settings.category,
    title: articleTitle,
    description: metaDescription,
    publishedAt,
    ...(isRevision ? { updatedAt: publicationDate } : {}),
    readingTime: "7 min",
    serviceSlug: settings.serviceSlug,
    lead,
    sections,
    conclusion,
    faq,
    relatedLinks,
    sources,
  };
}

const files = (await readdir(draftsDirectory)).filter((name) => name.endsWith(".md") && name !== "README.md").sort();
const articles = [];
for (const fileName of files) {
  const raw = await readFile(path.join(draftsDirectory, fileName), "utf8");
  articles.push(parseDraft(fileName, raw));
}

if (articles.length !== Object.keys(articleSettings).length) {
  throw new Error(`Esperados ${Object.keys(articleSettings).length} rascunhos; encontrados ${articles.length}`);
}

const output = `import type { ContentArticle } from "./content-data";\n\n// Gerado por scripts/compile-blog-drafts.mjs a partir de docs/blog-rascunhos.\nexport const editorialArticles: ContentArticle[] = ${JSON.stringify(articles, null, 2)};\n`;
await writeFile(outputFile, output, "utf8");
console.log(`Compilados ${articles.length} artigos em ${path.relative(root, outputFile)}.`);
