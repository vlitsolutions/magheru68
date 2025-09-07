const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '..', 'public', 'gala-2024');
const outputDir = path.join(__dirname, '..', 'public', 'gala-2024-optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Different sizes for responsive images
const sizes = [
  { name: 'mobile', width: 768, quality: 80 },
  { name: 'tablet', width: 1024, quality: 85 },
  { name: 'desktop', width: 1920, quality: 90 },
  { name: 'large', width: 2560, quality: 95 }
];

async function optimizeImages() {
  try {
    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));
    
    console.log(`Found ${imageFiles.length} images to optimize...`);
    
    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const baseName = path.parse(file).name;
      
      console.log(`Processing ${file}...`);
      
      // Get original image metadata
      const metadata = await sharp(inputPath).metadata();
      console.log(`Original: ${metadata.width}x${metadata.height}, ${Math.round(metadata.size / 1024)}KB`);
      
      // Process each size
      for (const size of sizes) {
        const outputPath = path.join(outputDir, `${baseName}-${size.name}.webp`);
        
        await sharp(inputPath)
          .resize(size.width, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ quality: size.quality })
          .toFile(outputPath);
        
        const stats = fs.statSync(outputPath);
        console.log(`  ${size.name}: ${size.width}px, ${Math.round(stats.size / 1024)}KB`);
      }
      
      // Create a blur placeholder (low quality, small size)
      const blurPath = path.join(outputDir, `${baseName}-blur.webp`);
      await sharp(inputPath)
        .resize(20, 20, { fit: 'inside' })
        .webp({ quality: 20 })
        .toFile(blurPath);
      
      console.log(`✓ Completed ${file}`);
    }
    
    console.log('\nAll images optimized successfully!');
    console.log(`Optimized images saved to: ${outputDir}`);
    
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();