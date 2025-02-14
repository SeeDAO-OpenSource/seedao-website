const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
  // Create a canvas with optimal dimensions for social media (1200x630 is recommended)
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Set background
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, height);

  // Try to load and draw the logo
  try {
    const logo = await loadImage(path.join(__dirname, '../public/logo.png'));
    const logoSize = 200;
    ctx.drawImage(logo, (width - logoSize) / 2, 150, logoSize, logoSize);
  } catch (error) {
    console.error('Error loading logo:', error);
  }

  // Add text
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  
  // Title
  ctx.font = 'bold 72px Arial';
  ctx.fillText('SEEDAO', width / 2, height / 2 + 50);
  
  // Tagline
  ctx.font = '36px Arial';
  ctx.fillText('Together Create Freedom', width / 2, height / 2 + 120);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
  fs.writeFileSync(path.join(__dirname, '../public/og-image.jpg'), buffer);
  console.log('Generated og-image.jpg successfully!');
}

generateOGImage().catch(console.error);
