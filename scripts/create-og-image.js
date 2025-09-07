const sharp = require('sharp');
const path = require('path');

async function createOGImage() {
  try {
    const inputPath = path.join(__dirname, '..', 'public', 'gala-2024', 'DSC_2575.jpg');
    const outputPath = path.join(__dirname, '..', 'public', 'hero-banner-event.webp');
    
    console.log('Creating OG image from DSC_2575.jpg...');
    
    // Get original image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`Original image: ${metadata.width}x${metadata.height}`);
    
    // Create OG image: 1200x630 (Facebook/WhatsApp standard)
    // Crop from top as requested
    await sharp(inputPath)
      .resize(1200, 630, { 
        fit: 'cover',
        position: 'top' // Crop from top
      })
      .webp({ quality: 90 })
      .toFile(outputPath);
    
    console.log('✓ OG image created successfully!');
    console.log(`Saved to: ${outputPath}`);
    console.log('Size: 1200x630 pixels (WhatsApp/Facebook standard)');
    console.log('Format: WebP with 90% quality');
    console.log('Crop position: Top');
    
  } catch (error) {
    console.error('Error creating OG image:', error);
  }
}

createOGImage();