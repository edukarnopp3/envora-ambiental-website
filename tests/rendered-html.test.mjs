import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://envora-consultoria-ambiental.pages.dev/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Envora landing page with production metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>envora<\/title>/i);
  assert.match(html, /Recebeu um auto de infração <em>ambiental\?<\/em>/i);
  assert.match(html, /https:\/\/envora-consultoria-ambiental\.pages\.dev/);
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
