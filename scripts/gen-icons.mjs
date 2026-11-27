// Gera os ícones raster (PNG + favicon.ico) a partir de public/logo.svg.
// Dependências não ficam no package.json; rode com:
//   npm i --no-save sharp png-to-ico && node scripts/gen-icons.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = resolve(root, "public/logo.svg");
const svg = readFileSync(svgPath);

// SVG tem viewBox 64x64; density alta garante borda nítida ao reamostrar.
const render = (size) =>
  sharp(svg, { density: Math.ceil((size / 64) * 96) })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png();

const pngTargets = [
  ["public/logo512.png", 512],
  ["public/logo192.png", 192],
  ["public/favicon-32.png", 32],
];

for (const [out, size] of pngTargets) {
  const buf = await render(size).toBuffer();
  writeFileSync(resolve(root, out), buf);
  console.log(`✓ ${out} (${size}x${size})`);
}

// favicon.ico multi-resolução (16/32/48).
const icoBuffers = await Promise.all(
  [16, 32, 48].map((s) => render(s).toBuffer()),
);
writeFileSync(resolve(root, "public/favicon.ico"), await pngToIco(icoBuffers));
console.log("✓ public/favicon.ico (16/32/48)");
