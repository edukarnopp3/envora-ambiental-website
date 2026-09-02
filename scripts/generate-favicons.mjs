import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.resolve("public");
const source = await fs.readFile(path.join(publicDir, "favicon.svg"));

await sharp(source).resize(16, 16).png().toFile(path.join(publicDir, "favicon-16x16.png"));
await sharp(source).resize(32, 32).png().toFile(path.join(publicDir, "favicon-32x32.png"));
await sharp(source).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));

// ICO com as duas resoluções principais para navegadores que dão preferência a ele.
const png16 = await sharp(source).resize(16, 16).png().toBuffer();
const png32 = await sharp(source).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(2, 4);
const entries = [
  { size: 16, data: png16, offset: 6 + 32 },
  { size: 32, data: png32, offset: 6 + 32 + png16.length },
].map(({ size, data, offset }) => {
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size, 0);
  entry.writeUInt8(size, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(data.length, 8);
  entry.writeUInt32LE(offset, 12);
  return entry;
});
await fs.writeFile(path.join(publicDir, "favicon.ico"), Buffer.concat([header, ...entries, png16, png32]));
