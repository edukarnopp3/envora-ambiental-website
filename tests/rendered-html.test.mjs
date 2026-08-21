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
  assert.match(html, /<title>Consultoria Ambiental em Joinville \| Envora<\/title>/i);
  assert.match(html, /Consultoria Ambiental em <em>Joinville<\/em>/i);
  assert.match(html, /https:\/\/envora-consultoria-ambiental\.pages\.dev/);
  assert.match(html, /https:\/\/wa\.me\/5547984551622/);
  assert.doesNotMatch(html, /codex-preview|chatgpt\.site|Your site is taking shape/i);
});

test("keeps the conversion and compliance sections in the rendered page", async () => {
  const html = await (await render()).text();

  assert.match(html, /Fazer triagem inicial/);
  assert.match(html, /Indústrias/);
  assert.match(html, /Clínicas e saúde/);
  assert.match(html, /Postos de combustível/);
  assert.match(html, /Construção civil/);
  assert.match(html, /DANC, CCA e dispensa/);
  assert.match(html, /não promete aprovação nem prazo controlado pelo órgão público/);
});
