const sharp = require('sharp');
const path = require('path');

async function splitArch() {
  const input = path.join(__dirname, '../src/assets/botanical-arch.jpg');
  const meta = await sharp(input).metadata();
  console.log('Splitting image of size:', meta.width, 'x', meta.height);

  // Top arch: from y=0 to y=450
  await sharp(input)
    .extract({ left: 0, top: 0, width: meta.width, height: 460 })
    .png()
    .toFile(path.join(__dirname, '../src/assets/botanical-top.png'));

  // Bottom arch: from y=440 to y=896
  await sharp(input)
    .extract({ left: 0, top: 436, width: meta.width, height: meta.height - 436 })
    .png()
    .toFile(path.join(__dirname, '../src/assets/botanical-bottom.png'));

  console.log('Successfully created botanical-top.png and botanical-bottom.png');
}

splitArch().catch(err => {
  console.error(err);
  process.exit(1);
});
