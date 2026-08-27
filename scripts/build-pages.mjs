import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const logDirectory = resolve(projectRoot, ".wrangler");
const pagesDirectory = resolve(projectRoot, "dist-pages");

mkdirSync(logDirectory, { recursive: true });

const vinextCli = resolve(projectRoot, "node_modules", "vinext", "dist", "cli.js");
const build = spawnSync(process.execPath, [vinextCli, "build"], {
  cwd: projectRoot,
  env: {
    ...process.env,
    WRANGLER_LOG_PATH: resolve(logDirectory, "wrangler.log"),
  },
  stdio: "inherit",
});

if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status ?? 1);

const serverDirectory = resolve(projectRoot, "dist", "server");
const clientDirectory = resolve(projectRoot, "dist", "client");

if (!existsSync(serverDirectory) || !existsSync(clientDirectory)) {
  throw new Error("O build não gerou as pastas dist/server e dist/client.");
}

mkdirSync(pagesDirectory, { recursive: true });
cpSync(serverDirectory, pagesDirectory, { recursive: true, force: true });
cpSync(clientDirectory, pagesDirectory, { recursive: true, force: true });
cpSync(resolve(projectRoot, "cloudflare", "_worker.js"), resolve(pagesDirectory, "_worker.js"), { force: true });
rmSync(resolve(pagesDirectory, "wrangler.json"), { force: true });
rmSync(resolve(logDirectory, "deploy", "config.json"), { force: true });

console.log("Build do Cloudflare Pages sincronizado em dist-pages.");
