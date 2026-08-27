import path from "node:path";
import sharp from "sharp";

const projectRoot = path.resolve(import.meta.dirname, "..");
const input = path.join(projectRoot, "public", "envora-instagram-profile.svg");
const output = path.join(projectRoot, "public", "envora-instagram-profile.png");

sharp(input)
  .png({ compressionLevel: 9 })
  .toFile(output)
  .then(({ width, height, size }) => {
    console.log(`${output} ${width}x${height} ${size} bytes`);
  });
