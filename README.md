# Web Imigrasi & Prosedur Perjalanan 🌍

Portal informasi modern untuk prosedur imigrasi dan perjalanan. Dibangun dengan desain terinspirasi dari tema Web3 (Glassmorphism, Neon Cyberpunk) yang memberikan nuansa futuristik, elegan, namun tetap mudah digunakan (*user-friendly*). 

Proyek ini telah dikembangkan dengan arsitektur **Next.js 14 (App Router) sebagai Static Frontend-Only** dan disiapkan khusus agar dapat di-*deploy* secara instan ke **Vercel** tanpa kerumitan pengaturan *database*.

## 🚀 Fitur Utama

- **Tampilan Futuristis (Web3 Theme)**: Antarmuka cantik menggunakan efek *backdrop-filter*, *neon glow*, animasi *framer-motion*, dan gradien halus.
- **Daftar Panduan Imigrasi**: Menampilkan topik-topik krusial seperti Syarat Umum Perjalanan, Anak di Bawah Umur, dan Pembuatan Paspor Baru secara interaktif.
- **Rincian Prosedur**: Halaman khusus untuk tiap panduan yang menyajikan langkah-langkah persyaratan *(Timeline)* dengan animasi gulir (*scroll reveal*).
- **Frontend-Only**: Berjalan 100% di sisi *client* dan *build-time*, sehingga dijamin tidak ada *error* ketika di-*hosting* ke Vercel.

## 🛠 Teknologi yang Digunakan
- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS, Vanilla CSS (`globals.css`)
- **Animasi**: Framer Motion
- **Ikon**: `lucide-react`
- **Arsitektur**: Serverless Static Data (`lib/data.ts`)

## 📦 Panduan Menjalankan Secara Lokal

1. **Kloning repositori ini:**
   ```bash
   git clone https://github.com/Alvinhidayatullah/Travel-Web-Prosedur.git
   cd Travel-Web-Prosedur
   ```

2. **Instal dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan Server Development:**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:3000` (atau port 3001).

## ☁️ Panduan Deploy ke Vercel

Proyek ini telah dikonfigurasi sepenuhnya untuk Vercel. Karena menggunakan arsitektur statis (*Frontend-Only*), proses *deploy* akan berjalan sangat mulus.

1. Hubungkan akun GitHub Anda ke [Vercel](https://vercel.com/).
2. Buat **New Project** dan *import* repositori `Travel-Web-Prosedur`.
3. Klik **Deploy**.
4. Selesai! Web Anda akan langsung aktif tanpa perlu mengatur *Environment Variables* atau *Database*.

---
*Dibangun dengan ❤️ untuk memberikan pengalaman perjalanan generasi berikutnya.*
