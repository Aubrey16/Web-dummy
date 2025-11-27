# Image Upload Website

Website untuk upload gambar dengan React frontend dan Node.js backend yang bisa di-deploy ke Vercel.

## Local Development

### Menjalankan di localhost:3001 (Full-stack)
```bash
cd backend
npm install
node server.js
```
Website akan tersedia di http://localhost:3001

### Menjalankan terpisah (Development)
Backend (Port 3001):
```bash
cd backend
npm install
npm start
```

Frontend (Port 3000):
```bash
cd frontend
npm install
npm start
```

## Deploy ke Vercel

### Cara 1: Deploy Manual
1. Install Vercel CLI: `npm install -g vercel`
2. Login: `vercel login`
3. Di root project: `vercel`
4. Follow instructions

### Cara 2: Deploy via GitHub
1. Push code ke GitHub
2. Connect repository di Vercel Dashboard
3. Vercel akan auto-deploy

### Konfigurasi Vercel
Project sudah dikonfigurasi dengan:
- `vercel.json` - Routing dan build configuration
- Vercel Functions untuk backend API
- Static hosting untuk frontend React

### Environment Variables (Opsional)
Untuk production, set environment variables di Vercel Dashboard:
- `NODE_ENV=production`

## Struktur Project
```
Web-dummy/
├── frontend/          # React app
├── backend/          # Node.js Express (local dev)
├── backend/api/      # Vercel Functions
└── vercel.json       # Vercel configuration
```

## Features
- ✅ Upload gambar
- ✅ Generate link akses unik
- ✅ Responsive design
- ✅ Ready untuk Vercel deployment