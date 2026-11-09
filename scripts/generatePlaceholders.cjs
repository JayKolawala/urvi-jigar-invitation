const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '../src/assets/gallery');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function createPlaceholder(filename, title, subtitle, width, height) {
  const safeTitle = title.replace(/&/g, '&amp;');
  const safeSubtitle = subtitle.toUpperCase().replace(/&/g, '&amp;');
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stop-color="#14353E" />
          <stop offset="60%" stop-color="#0D242B" />
          <stop offset="100%" stop-color="#061418" />
        </radialGradient>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F4D48A" />
          <stop offset="50%" stop-color="#CBA14C" />
          <stop offset="100%" stop-color="#9E7728" />
        </linearGradient>
        <pattern id="jali" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M15 0 L30 15 L15 30 L0 15 Z" fill="none" stroke="#CBA14C" stroke-width="0.5" stroke-opacity="0.12" />
        </pattern>
      </defs>

      <!-- Background -->
      <rect width="100%" height="100%" fill="url(#bg)" />
      <rect width="100%" height="100%" fill="url(#jali)" />

      <!-- Ornate Borders -->
      <rect x="20" y="20" width="${width - 40}" height="${height - 40}" fill="none" stroke="url(#gold)" stroke-width="1.5" stroke-opacity="0.6" rx="16" />
      <rect x="30" y="30" width="${width - 60}" height="${height - 60}" fill="none" stroke="url(#gold)" stroke-width="0.75" stroke-opacity="0.35" rx="12" />

      <!-- Corner Accents -->
      <path d="M20 50 L20 20 L50 20" fill="none" stroke="url(#gold)" stroke-width="3" stroke-linecap="round" />
      <path d="M${width - 20} 50 L${width - 20} 20 L${width - 50} 20" fill="none" stroke="url(#gold)" stroke-width="3" stroke-linecap="round" />
      <path d="M20 ${height - 50} L20 ${height - 20} L50 ${height - 20}" fill="none" stroke="url(#gold)" stroke-width="3" stroke-linecap="round" />
      <path d="M${width - 20} ${height - 50} L${width - 20} ${height - 20} L${width - 50} ${height - 20}" fill="none" stroke="url(#gold)" stroke-width="3" stroke-linecap="round" />

      <!-- Center Ornamental Crest & Monogram -->
      <circle cx="${width / 2}" cy="${height / 2 - 45}" r="44" fill="#102B33" stroke="url(#gold)" stroke-width="1.5" stroke-opacity="0.7" />
      <circle cx="${width / 2}" cy="${height / 2 - 45}" r="38" fill="none" stroke="url(#gold)" stroke-width="0.75" stroke-dasharray="3 3" stroke-opacity="0.5" />
      
      <!-- Monogram text -->
      <text x="${width / 2}" y="${height / 2 - 36}" font-family="Georgia, serif" font-size="24" font-weight="bold" fill="url(#gold)" text-anchor="middle">U &amp; J</text>

      <!-- Text -->
      <text x="${width / 2}" y="${height / 2 + 25}" font-family="Georgia, serif" font-size="22" font-weight="bold" fill="#FFFDF9" text-anchor="middle" letter-spacing="2">${safeTitle}</text>
      <text x="${width / 2}" y="${height / 2 + 52}" font-family="sans-serif" font-size="11" font-weight="600" fill="#CBA14C" text-anchor="middle" letter-spacing="3">${safeSubtitle}</text>

      <rect x="${width / 2 - 130}" y="${height / 2 + 75}" width="260" height="28" rx="14" fill="#061418" stroke="url(#gold)" stroke-width="0.75" stroke-opacity="0.5" />
      <text x="${width / 2}" y="${height / 2 + 93}" font-family="sans-serif" font-size="10" fill="#A5C1BC" text-anchor="middle" letter-spacing="1">Replace with ${filename}</text>
    </svg>
  `;

  await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile(path.join(dir, filename));
  console.log('Created:', filename);
}

async function run() {
  await createPlaceholder('couple-hero.jpg', 'Urvi & Jigar', 'Editorial Couple Portrait', 800, 1000);
  await createPlaceholder('couple-gallery-1.jpg', 'The Auspicious Moments', 'Traditional Ceremony Portrait', 800, 1000);
  await createPlaceholder('couple-gallery-2.jpg', 'Joy & Festivity', 'Haldi & Sangeet Celebrations', 900, 600);
  await createPlaceholder('couple-gallery-3.jpg', 'Forever & Always', 'Romantic Couple Session', 800, 1000);
}

run().catch(console.error);
