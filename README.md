# Image Upload

Simple image upload website tanpa login. Gambar dapat diakses dari link unik.

## Fitur

- 📷 Upload gambar tanpa perlu login
- 🔗 Setiap gambar memiliki link unik yang bisa dibagikan
- 📱 Responsive design (mobile & desktop)
- 🎨 Drag & drop support
- 📋 Copy link dengan satu klik

## Teknologi

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) - Image storage

## Deploy ke Vercel

1. Fork repository ini
2. Buat akun di [Vercel](https://vercel.com)
3. Import project dari GitHub
4. Di Vercel Dashboard, pergi ke **Storage** dan buat **Blob Store**
5. Connect Blob Store ke project
6. Deploy!

## Environment Variables

Untuk deploy ke Vercel, kamu perlu:

- `BLOB_READ_WRITE_TOKEN` - Otomatis terbuat saat connect Blob Store

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Format Gambar yang Didukung

- JPEG/JPG
- PNG
- GIF
- WebP

Maksimum ukuran file: 5MB
