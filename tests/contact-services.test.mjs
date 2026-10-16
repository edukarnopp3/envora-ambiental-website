import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import test, { before, after } from "node:test";

const root = fileURLToPath(new URL("..", import.meta.url));
const next = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const base = `http://127.0.0.1:${34100 + (process.pid % 1000)}`;
const services = [
  {
    slug: "responsabilidade-tecnica-ambiental",
    title: "Responsabilidade Técnica Ambiental (RT)",
    message: "Olá! Preciso conversar sobre responsabilidade técnica ambiental. Minha empresa fica em [cidade] e atua com [atividade].",
  },
  {
    slug: "outorga-e-regularizacao-de-uso-da-agua",
    title: "Outorga e regularização de poços/uso da água",
    message: "Olá! Preciso de ajuda com outorga ou regularização de uso da água. O imóvel fica em [cidade] e a situação é [poço/captação/outro].",
  },
];
let server;

before(async () => {
  server = spawn(process.execPath, [next, "start", "--port", new URL(base).port], { cwd: root, stdio: "ignore" });
  for (let attempt = 0; attempt < 80; attempt++) {
    try { if ((await fetch(base)).ok) return; } catch { /* Wait for the test server. */ }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error("O servidor de teste não iniciou.");
});

after(() => server?.kill());

for (const service of services) {
  test(`${service.slug}: every contact CTA preserves the exact WhatsApp message`, async () => {
    const response = await fetch(`${base}/servicos/${service.slug}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    const whatsappLinks = [...html.matchAll(/<a\b[^>]*href="(https:\/\/wa\.me\/[^"]+)"/g)];
    assert.equal(whatsappLinks.length, 5);
    for (const [, href] of whatsappLinks) {
      const url = new URL(href.replaceAll("&amp;", "&"));
      assert.equal(url.pathname, "/5547984551622");
      assert.equal(url.searchParams.get("text"), service.message);
    }
    assert.doesNotMatch(html, /<form\b/i);
    assert.match(html, /Como começa o atendimento/);
    assert.match(html, /O que ajuda na conversa/);
    assert.match(html, /A Envora conduz o trabalho contratado/);
    assert.ok(html.includes(`rel="canonical" href="https://envorambiental.com.br/servicos/${service.slug}"`));
    assert.ok(html.includes(`"name":"${service.title}"`));
  });
}

test("new services are linked from the service menu and included in the sitemap", async () => {
  const [home, sitemap] = await Promise.all([
    fetch(base).then((response) => response.text()),
    fetch(`${base}/sitemap.xml`).then((response) => response.text()),
  ]);
  for (const { slug } of services) {
    assert.ok(home.includes(`href="/servicos/${slug}"`));
    assert.ok(sitemap.includes(`/servicos/${slug}`));
  }
});

test("existing service links keep their default message", async () => {
  const html = await fetch(`${base}/servicos/licenciamento-ambiental`).then((response) => response.text());
  const [, href] = html.match(/<a\b[^>]*href="(https:\/\/wa\.me\/[^"]+)"/);
  assert.match(new URL(href.replaceAll("&amp;", "&")).searchParams.get("text"), /Olá, gostaria de conversar com a Envora sobre Licenciamento ambiental/);
});
