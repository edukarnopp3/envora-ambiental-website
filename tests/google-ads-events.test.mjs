import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("../app/google-ads-events.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const moduleUrl = `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`;
const { trackWhatsAppClickConversion } = await import(moduleUrl);

test("sends the WhatsApp click to its Google Ads secondary conversion action", () => {
  const events = [];
  const previousWindow = globalThis.window;
  globalThis.window = { gtag: (...args) => events.push(args) };

  try {
    trackWhatsAppClickConversion();
    assert.deepEqual(events, [[
      "event",
      "conversion",
      { send_to: "AW-18413899550/HU26COPXjOkcEJ6et8xE" },
    ]]);
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
});

test("does nothing when executed without a browser", () => {
  const previousWindow = globalThis.window;
  delete globalThis.window;

  try {
    assert.doesNotThrow(() => trackWhatsAppClickConversion());
  } finally {
    if (previousWindow !== undefined) globalThis.window = previousWindow;
  }
});
