import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import test, { after, before } from "node:test";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const nextCli = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const port = 32100 + (process.pid % 1000);
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
      const response = await fetch(siteUrl);
      if (response.ok) return;
    } catch {
      // O servidor pode ainda não ter aberto a porta durante o build de inicialização.
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error("O servidor Next.js não iniciou a tempo para os testes.");
});

after(() => {
  server?.kill();
});

async function render(path = "/") {
  return fetch(`${siteUrl}${path}`, { headers: { accept: "text/html" } });
}

test("server-renders the Envora landing page with production metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(response.headers.get("content-security-policy") ?? "", /default-src 'self'/);
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");

  const html = await response.text();
  assert.match(html, /<title>Consultoria Ambiental em Joinville \| Envora<\/title>/);
  assert.match(html, /Clareza para seu projeto avançar\./i);
  assert.match(html, /https:\/\/envorambiental\.com\.br/);
  assert.match(html, /https:\/\/wa\.me\/5547984551622/);
  assert.match(html, /mailto:envoraambiental@gmail\.com/);
  assert.match(html, /id="splash"/);
  assert.match(html, /id="site"/);
  assert.match(html, /Envora Ambiental/);
  assert.match(html, /clique para continuar/);
  assert.match(html, /favicon-32x32\.png/);
  assert.match(html, /favicon-16x16\.png/);
  assert.match(html, /apple-touch-icon\.png/);
  assert.doesNotMatch(html, /codex-preview|chatgpt\.site|Your site is taking shape/i);
  assert.doesNotMatch(html, /Aqui entra o conteúdo principal do site/);
});

test("keeps the conversion sections and removes the requested transparency note", async () => {
  const html = await (await render()).text();

  assert.match(html, /Fazer triagem inicial/);
  assert.match(html, /Falar no WhatsApp/);
  assert.match(html, /Consultoria Ambiental · Joinville/);
  assert.match(html, /hero-rio-4k\.mp4/);
  assert.doesNotMatch(html, /Órgão emissor, prazo informado e assunto|Exigências e documentos ambientais envolvidos|Escopo técnico e próximos passos possíveis/);
  assert.doesNotMatch(html, /Leitura técnica/);
  assert.match(html, /Indústrias/);
  assert.match(html, /Clínicas e saúde/);
  assert.match(html, /Postos de combustível/);
  assert.match(html, /Construção civil/);
  assert.match(html, /Comércios e serviços/);
  assert.doesNotMatch(html, /Transparência:<\/b> a Envora não promete aprovação nem prazo controlado pelo órgão público/);
  assert.match(html, /data-scroll-panel/);
  assert.match(html, /envora-logo-horizontal-dark\.svg/);
  assert.doesNotMatch(html, /Demandas organizadas por setor, sem pacotes genéricos/);
  assert.doesNotMatch(html, /A contratação começa pelo entendimento da atividade/);
  assert.doesNotMatch(html, /As respostas iniciam a conversa com contexto/);
  assert.doesNotMatch(html, /Um processo legível, com entregas e responsabilidades definidas/);
});

test("publishes only the approved service scope and complete contact details", async () => {
  const html = await (await render()).text();

  assert.match(html, /Diagnóstico e enquadramento ambiental/);
  assert.match(html, /Autos de infração e exigências ambientais/);
  assert.match(html, /Recebi um auto de infração ambiental\. O que faço\?/);
  assert.match(html, /Planos de gerenciamento de resíduos/);
  assert.match(html, /PGRS, PGRSS e PGRCC/);
  assert.match(html, /Laudo e controle acústico/);
  assert.match(html, /Outra situação/);
  assert.doesNotMatch(html, />Eduardo Karnopp</);
  assert.doesNotMatch(html, /Consultoria ambiental em Joinville para empresas/i);
  assert.match(html, /Engenheiro Ambiental e Sanitarista/);
  assert.match(html, /\(47\) 98455-1622/);
  assert.match(html, /href="tel:\+5547984551622"/);
  assert.match(html, /https:\/\/www\.instagram\.com\/envoraambiental\//);
  assert.match(html, /href="\/privacidade">Privacidade<\/a>/);
  assert.doesNotMatch(html, /passivos ambientais|investigação (?:ambiental )?de solo|movimentação de solo|supressão|gestão ambiental de obras|canteiro|projeto de sistema de tratamento de efluentes|alvará sanitário/i);
  assert.doesNotMatch(html, /ART quando aplicável|Responsabilidade técnica e ART/i);
  assert.doesNotMatch(html, /cancelamento de multa|cancelar multa|garantia de aprovação/i);
  assert.doesNotMatch(html, /#(?:ef6b3f|d85a30)|var\(--orange\)/i);
});

test("links every service card to a dedicated official-source page", async () => {
  const html = await (await render()).text();
  const servicePaths = [
    "auto-de-infracao-ambiental",
    "diagnostico-e-enquadramento-ambiental",
    "danc",
    "cca",
    "licenciamento-ambiental",
    "lap-lai-lao",
    "autorizacao-ambiental-aua",
    "renovacao-e-regularizacao",
    "gestao-de-condicionantes",
    "planos-de-gerenciamento-de-residuos",
    "mtr-e-documentacao-de-residuos",
    "laudo-e-controle-acustico",
  ];

  for (const path of servicePaths) {
    assert.match(html, new RegExp(`href="/servicos/${path}"`));
    const response = await render(`/servicos/${path}`);
    assert.equal(response.status, 200);
    const serviceHtml = await response.text();
    if (path === "lap-lai-lao") {
      assert.match(serviceHtml, /Validar a viabilidade/);
      assert.match(serviceHtml, /Autorizar a instalação/);
      assert.match(serviceHtml, /Autorizar a operação/);
      assert.match(serviceHtml, /class="license-stage"/);
      assert.doesNotMatch(serviceHtml, /Falar sobre a/);
      assert.match(serviceHtml, /Você não precisa saber qual licença pedir/);
      assert.match(serviceHtml, /Deixar a Envora resolver/);
      assert.match(serviceHtml, /A emissão da licença e o prazo de análise são decisões do órgão ambiental competente/);
    } else {
      assert.match(serviceHtml, /Fontes oficiais consultadas/);
      assert.match(serviceHtml, /Informações para a análise/);
      assert.match(serviceHtml, /Limites do escopo/);
      assert.match(serviceHtml, /Serviços relacionados/);
    }
  }

  for (const legacyPath of ["pgrs", "pgrss", "pgrcc"]) {
    const response = await render(`/servicos/${legacyPath}`);
    assert.equal(response.status, 200);
    assert.match(response.url, /\/servicos\/planos-de-gerenciamento-de-residuos$/);
  }
});

test("publishes original environmental content pages with official sources", async () => {
  const homeHtml = await (await render()).text();
  assert.match(homeHtml, /Conteúdos e atualizações/);
  assert.match(homeHtml, /O ambiental explicado sem rodeios/);

  for (const path of [
    "lap-lai-lao-entenda-as-etapas",
    "licenca-ambiental-ou-autorizacao-ambiental",
    "antes-de-instalar-ampliar-ou-operar",
  ]) {
    const response = await render(`/conteudos/${path}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /Fontes oficiais/);
    assert.match(html, /application\/ld\+json/);
    assert.match(html, /Prefeitura de Joinville|IMA\/SC/);
  }
});

test("serves the optimized licensing journey artwork", async () => {
  const response = await render("/licenciamento-etapas-projeto-v2.webp");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^image\/webp/i);
  assert.ok(Number(response.headers.get("content-length") ?? 0) > 100_000);
});

test("labels the lead fields and publishes accurate privacy information", async () => {
  const html = await (await render()).text();
  assert.match(html, /for="triage-sector"/);
  assert.match(html, /name="sector"/);
  assert.match(html, /for="triage-situation"/);
  assert.match(html, /name="situation"/);
  assert.match(html, /Explicar minha situação no WhatsApp/);
  assert.doesNotMatch(html, /id="contato"/);
  assert.doesNotMatch(html, /name="company"|name="phone"|name="city"/);

  const privacyHtml = await (await render("/privacidade")).text();
  assert.match(privacyHtml, /hospedagem do site é realizada pela Vercel/i);
  assert.match(privacyHtml, /armazenamento permanece negado/i);
  assert.doesNotMatch(privacyHtml, /hospedagem do site é realizada pela Cloudflare/i);
});

test("serves the isolated Instagram links hub with only the three approved channels", async () => {
  const response = await render("/links");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Envora \| Contato<\/title>/);
  assert.match(html, /name="robots" content="noindex, follow"/);
  assert.match(html, /WhatsApp/);
  assert.match(html, /https:\/\/wa\.me\/5547984551622/);
  assert.match(html, /Conhecer a consultoria/);
  assert.match(html, /mailto:envoraambiental@gmail\.com/);
  assert.doesNotMatch(html, /<strong>(?:Instagram|LinkedIn|Google Maps|Triagem inicial)<\/strong>/);
});
