/**
 * Recompress PNG/JPEG project shots and emit @2x variants (no cropping).
 * Usage: npm run optimize:projects
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const dir = path.join(process.cwd(), 'public/projects')
const files = fs.readdirSync(dir).filter((f) => /\.(jpe?g|png)$/i.test(f) && !f.includes('@2x'))

for (const file of files) {
  const input = path.join(dir, file)
  const buf = await sharp(input)
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer()
  const meta = await sharp(buf).metadata()
  fs.writeFileSync(input, buf)
  await sharp(buf)
    .resize({
      width: meta.width * 2,
      height: meta.height * 2,
      kernel: sharp.kernel.lanczos3,
    })
    .png({ compressionLevel: 9 })
    .toFile(path.join(dir, file.replace(/(\.[a-z]+)$/i, '@2x$1')))
  console.log(`${file} ${meta.width}x${meta.height}`)
}
