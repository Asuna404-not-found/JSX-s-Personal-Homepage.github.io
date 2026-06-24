/**
 * 资产优化脚本
 * 压缩图片和 PDF 以加快网站加载速度
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'assets', 'images');
const PDF_DIR = path.join(__dirname, 'assets', 'docs', 'pdf');

async function optimizeImages() {
  console.log('=== 优化图片 ===');

  // --- 优化海报图片 (ICMEposter-1.png) ---
  const posterSrc = path.join(IMAGES_DIR, 'ICMEposter-1.png');
  const posterWebp = path.join(IMAGES_DIR, 'ICMEposter-1.webp');
  const posterJpg = path.join(IMAGES_DIR, 'ICMEposter-1.jpg');

  if (fs.existsSync(posterSrc)) {
    const metadata = await sharp(posterSrc).metadata();
    console.log(`原始海报: ${metadata.width}x${metadata.height}, ${(fs.statSync(posterSrc).size / 1024 / 1024).toFixed(1)} MB`);

    // 限制宽度为 1200px (2x 屏幕的 600px 显示尺寸)
    const resizeOpts = { width: Math.min(metadata.width, 1200), withoutEnlargement: true };

    // WebP 格式 (最优)
    await sharp(posterSrc)
      .resize(resizeOpts)
      .webp({ quality: 80, effort: 6 })
      .toFile(posterWebp);
    console.log(`  -> WebP: ${(fs.statSync(posterWebp).size / 1024).toFixed(0)} KB`);

    // JPEG 格式 (回退)
    await sharp(posterSrc)
      .resize(resizeOpts)
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(posterJpg);
    console.log(`  -> JPEG: ${(fs.statSync(posterJpg).size / 1024).toFixed(0)} KB`);

    // 也保留一个缩小版的 PNG (用于兼容性)
    const posterPng = path.join(IMAGES_DIR, 'ICMEposter-1-sm.png');
    await sharp(posterSrc)
      .resize(resizeOpts)
      .png({ compressionLevel: 9, palette: true })
      .toFile(posterPng);
    console.log(`  -> PNG-sm: ${(fs.statSync(posterPng).size / 1024).toFixed(0)} KB`);
  }

  // --- 优化 Favicon ---
  const faviconSrc = path.join(IMAGES_DIR, 'favicon.png');
  if (fs.existsSync(faviconSrc)) {
    const favSize = fs.statSync(faviconSrc).size;
    console.log(`\n原始 Favicon: ${(favSize / 1024).toFixed(1)} KB`);

    // Favicon 优化 (压缩但保持 512x512)
    const favOptimized = path.join(IMAGES_DIR, 'favicon-optimized.png');
    await sharp(faviconSrc)
      .png({ compressionLevel: 9, palette: true })
      .toFile(favOptimized);
    console.log(`  -> 优化后: ${(fs.statSync(favOptimized).size / 1024).toFixed(1)} KB`);

    // 替换原文件
    fs.copyFileSync(favOptimized, faviconSrc);
    fs.unlinkSync(favOptimized);
    console.log(`  -> 已替换 favicon.png`);
  }
}

async function compressPDF(inputPath, outputPath) {
  // 使用纯 JS 方法压缩 PDF
  // 注意: 没有 Ghostscript, 使用简单的文件级优化
  const originalSize = fs.statSync(inputPath).size;

  // 读取 PDF 并移除不必要的元数据/注释
  let data = fs.readFileSync(inputPath, 'binary');

  // 移除 XMP 元数据 (通常在 <?xpacket 标签中)
  data = data.replace(/<\?xpacket begin='[^']*' id='[^']*'\?>[\s\S]*?<\?xpacket end='[wW]'\?>/g, '');

  // 压缩连续的空白字符 (不破坏 PDF 结构)
  // 仅在注释和流以外的位置进行
  const lines = data.split('\n');
  const cleanedLines = lines.map(line => {
    // 跳过二进制流内容行
    if (line.length > 100 && /^[a-zA-Z0-9\/\*\+]+$/.test(line.trim())) {
      return line; // 可能是编码的流数据，不修改
    }
    return line.replace(/\s{2,}/g, ' ');
  });

  let result = cleanedLines.join('\n');

  // 如果压缩后更小，则写入
  if (result.length < data.length) {
    fs.writeFileSync(outputPath, result, 'binary');
    const newSize = fs.statSync(outputPath).size;
    const savedPercent = ((1 - newSize / originalSize) * 100).toFixed(1);
    console.log(`  -> 压缩: ${(originalSize / 1024).toFixed(0)} KB → ${(newSize / 1024).toFixed(0)} KB (节省 ${savedPercent}%)`);
    return true;
  } else {
    // 如果没有改善，复制原文件
    fs.copyFileSync(inputPath, outputPath);
    console.log(`  -> 无法进一步压缩 (${(originalSize / 1024).toFixed(0)} KB)`);
    return false;
  }
}

async function optimizePDFs() {
  console.log('\n=== 优化 PDF ===');

  // 压缩 ICMEposter.pdf
  const posterPdfSrc = path.join(PDF_DIR, 'ICMEposter.pdf');
  const posterPdfOut = path.join(PDF_DIR, 'ICMEposter-compressed.pdf');
  if (fs.existsSync(posterPdfSrc)) {
    console.log(`ICMEposter.pdf: ${(fs.statSync(posterPdfSrc).size / 1024 / 1024).toFixed(1)} MB`);
    await compressPDF(posterPdfSrc, posterPdfOut);
    // 如果压缩成功，替换原文件
    const compressed = fs.statSync(posterPdfOut).size;
    if (compressed < fs.statSync(posterPdfSrc).size) {
      fs.copyFileSync(posterPdfOut, posterPdfSrc);
    }
    fs.unlinkSync(posterPdfOut);
  }

  // 压缩 2604.03998v1.pdf
  const arxivPdfSrc = path.join(PDF_DIR, '2604.03998v1.pdf');
  const arxivPdfOut = path.join(PDF_DIR, '2604.03998v1-compressed.pdf');
  if (fs.existsSync(arxivPdfSrc)) {
    console.log(`2604.03998v1.pdf: ${(fs.statSync(arxivPdfSrc).size / 1024).toFixed(0)} KB`);
    await compressPDF(arxivPdfSrc, arxivPdfOut);
    const compressed = fs.statSync(arxivPdfOut).size;
    if (compressed < fs.statSync(arxivPdfSrc).size) {
      fs.copyFileSync(arxivPdfOut, arxivPdfSrc);
    }
    fs.unlinkSync(arxivPdfOut);
  }
}

async function main() {
  console.log('开始优化网站资产...\n');

  await optimizeImages();
  await optimizePDFs();

  console.log('\n=== 优化完成 ===');
}

main().catch(err => {
  console.error('错误:', err);
  process.exit(1);
});
