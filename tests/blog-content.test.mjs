import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import test, { after, before } from "node:test";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const nextCli = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const port = 32200 + (process.pid % 1000);
const siteUrl = `http://127.0.0.1:${port}`;
let server;

before(async () => {
  server = spawn(process.execPath, [nextCli, "start", "-p", String(port)], {
    cwd: projectRoot,
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: "ignore",
  });

  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(`${siteUrl}/conteudos`);
      if (response.ok) return;
    } catch {
      // The production server may still be opening its port.
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error("The production server did not start in time for blog tests.");
});

after(() => server?.kill());

test("publishes the prioritized blog articles with FAQs, related links, and official sources", async () => {
  const paths = [
    "licenca-ambiental-vencida-o-que-fazer",
    "recebi-auto-infracao-ambiental",
    "oficio-ambiental-o-que-fazer",
    "licenca-ambiental-ou-autorizacao-ambiental",
    "licenciamento-ambiental-oficina-mecanica-joinville",
    "pgrs-quem-precisa-como-fazer",
    "transportadora-precisa-licenca-ambiental-joinville",
    "residuos-limpeza-manutencao-empresa",
    "quanto-custa-licenciamento-industria",
    "como-renovar-lao-industria",
  ];

  const indexHtml = await (await fetch(`${siteUrl}/conteudos`)).text();
  const sitemapXml = await (await fetch(`${siteUrl}/sitemap.xml`)).text();

  for (const path of paths) {
    assert.ok(indexHtml.includes(`/conteudos/${path}`), `${path} should appear in the blog index`);
    assert.ok(sitemapXml.includes(`/conteudos/${path}`), `${path} should appear in the sitemap`);
    const response = await fetch(`${siteUrl}/conteudos/${path}`);
    assert.equal(response.status, 200, `${path} should return a published article`);
    const html = await response.text();
    assert.match(html, /Perguntas frequentes/);
    assert.match(html, /Continue a leitura/);
    assert.match(html, /Fontes oficiais/);
    assert.match(html, /application\/ld\+json/);
  }

  const infractionHtml = await (await fetch(`${siteUrl}/conteudos/recebi-auto-infracao-ambiental`)).text();
  assert.match(infractionHtml, /20 dias úteis/);
  assert.match(infractionHtml, /expedidas pela SAMA/);
  assert.match(infractionHtml, /não deve ser aplicada automaticamente/);

  const comparisonHtml = await (await fetch(`${siteUrl}/conteudos/licenca-ambiental-ou-autorizacao-ambiental`)).text();
  assert.match(comparisonHtml, /DANC, CCA, AuA ou licença/);
  assert.match(comparisonHtml, /Atualizado em/);
  assert.match(comparisonHtml, /<table\b/);

  const revisedArticleHtml = await (await fetch(`${siteUrl}/conteudos/quanto-custa-licenciamento-industria`)).text();
  assert.match(revisedArticleHtml, /Atualizado em/);
  assert.match(revisedArticleHtml, /Não existe um preço único/);
});
