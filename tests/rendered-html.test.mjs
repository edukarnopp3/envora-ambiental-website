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

async function render() {
  return fetch(siteUrl, { headers: { accept: "text/html" } });
}

test("server-renders the Envora landing page with production metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(response.headers.get("content-security-policy") ?? "", /default-src 'self'/);
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");

  const html = await response.text();
  assert.match(html, /<title>Envora<\/title>/);
  assert.match(html, /Recebeu um auto de infração <em>ambiental\?<\/em>/i);
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

  assert.match(html, /Enviar auto de infração para triagem/);
  assert.match(html, /Atendimento técnico em Joinville/);
  assert.match(html, /Envie o documento para uma triagem técnica/);
  assert.match(html, /hero-logo-3d/);
  assert.doesNotMatch(html, /Órgão emissor, prazo informado e assunto|Exigências e documentos ambientais envolvidos|Escopo técnico e próximos passos possíveis/);
  assert.doesNotMatch(html, /Leitura técnica/);
  assert.match(html, /Indústrias/);
  assert.match(html, /Clínicas e saúde/);
  assert.match(html, /Postos de combustível/);
  assert.match(html, /Construção civil/);
  assert.match(html, /Comércios e serviços/);
  assert.doesNotMatch(html, /Transparência:<\/b> a Envora não promete aprovação nem prazo controlado pelo órgão público/);
  assert.match(html, /data-scroll-panel/);
  assert.match(html, /envora-logo-horizontal\.svg/);
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
  assert.match(html, /PGRS/);
  assert.match(html, /PGRSS/);
  assert.match(html, /PGRCC/);
  assert.match(html, /Laudo e controle acústico/);
  assert.match(html, /Outra situação/);
  assert.match(html, /Eduardo Karnopp/);
  assert.match(html, /Engenheiro Ambiental e Sanitarista/);
  assert.match(html, /\(47\) 98455-1622/);
  assert.match(html, /href="tel:\+5547984551622"/);
  assert.match(html, /href="\/privacidade">Privacidade<\/a>/);
  assert.doesNotMatch(html, /passivos ambientais|investigação (?:ambiental )?de solo|movimentação de solo|supressão|gestão ambiental de obras|canteiro|projeto de sistema de tratamento de efluentes|alvará sanitário/i);
  assert.doesNotMatch(html, /ART quando aplicável|Responsabilidade técnica e ART/i);
  assert.doesNotMatch(html, /cancelamento de multa|cancelar multa|garantia de aprovação/i);
  assert.doesNotMatch(html, /#(?:ef6b3f|d85a30)|var\(--orange\)/i);
});
