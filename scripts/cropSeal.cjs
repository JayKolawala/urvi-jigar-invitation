const sharp = require('sharp');
const path = require('path');

async function createIsolatedSeal() {
  const input = path.join(__dirname, '../src/assets/monogram-seal.jpg');
  const size = 640;
  // center of the seal in input image is at (511, 530)
  const left = Math.round(511 - size / 2);
  const top = Math.round(530 - size / 2);

  const cropped = await sharp(input)
    .extract({ left, top, width: size, height: size })
    .toBuffer();

  const r = 296; // slightly tighter radius to ensure 100% clean seal edge
  const cx = size / 2;
  const cy = size / 2;
  const maskSvg = Buffer.from(`
    <svg width="${size}" height="${size}">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="white" />
    </svg>
  `);

  const output = path.join(__dirname, '../src/assets/wax-seal-isolated.png');
  await sharp(cropped)
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .png()
    .toFile(output);

  console.log('Successfully updated:', output);
}

createIsolatedSeal().catch(err => {
  console.error(err);
  process.exit(1);
});
