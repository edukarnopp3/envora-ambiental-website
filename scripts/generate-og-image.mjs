import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = await readFile(path.join(projectRoot, "docs/og/envora-og-master.svg"));

await sharp(source)
  .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
  .toFile(path.join(projectRoot, "public/og.png"));

const outputPath = path.join(projectRoot, "public/og.png");
const { width, height, format } = await sharp(outputPath).metadata();
const { size } = await stat(outputPath);
console.log(`${format} ${width}x${height} (${size} bytes)`);
