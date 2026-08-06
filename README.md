# Web Imigrasi & Infografis 🌍

Portal informasi modern untuk prosedur imigrasi, paspor, visa, dan syarat perjalanan internasional. Dibangun dengan desain terinspirasi dari tema UI modern (Glassmorphism, Neon Cyberpunk) yang memberikan nuansa futuristik, elegan, namun tetap informatif dan mudah digunakan (*user-friendly*). 

Proyek ini menggunakan arsitektur **Next.js 14 (App Router) sebagai Static Frontend-Only** sehingga dapat di-*deploy* secara instan ke **Vercel** dengan performa tinggi.

## 🚀 Fitur Utama

- **Tampilan Futuristis**: Antarmuka premium dengan efek *backdrop-filter*, gradien *neon*, animasi mikro, dan transisi halaman yang halus.
- **Sistem Kategori Bersarang (Nested Topics)**: Navigasi intuitif untuk menelusuri kategori besar ke rincian spesifik tanpa kebingungan.
- **Infografis Prosedur interaktif**: Halaman khusus untuk tiap panduan yang menyajikan langkah-langkah persyaratan dalam bentuk *Timeline* (garis waktu) yang rapi.
- **Empat Pilar Informasi Utama**:
  1. **Syarat Umum Perjalanan**: Panduan standar keberangkatan ke luar negeri.
  2. **Syarat Keberangkatan Khusus**: Meliputi Anak di Bawah Umur, Pekerja Migran (PMI), Haji/Umrah, dan Evakuasi Medis.
  3. **Layanan & Prosedur Paspor RI**: Informasi pembuatan paspor baru, perpanjangan, hilang/rusak, dan percepatan (sehari jadi).
  4. **Persyaratan Berbagai Jenis Visa**: e-Visa, Visa Kunjungan, VITAS, dan Visa Khusus.

## 🛠 Teknologi yang Digunakan
- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS, Vanilla CSS (`globals.css`)
- **Ikon**: `lucide-react`
- **Arsitektur Data**: Serverless Static Data (`lib/data.ts`)

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
   Aplikasi akan berjalan di `http://localhost:3000` (atau port yang tersedia).

## ☁️ Panduan Deploy ke Vercel

Proyek ini dikonfigurasi sepenuhnya untuk Vercel. Menggunakan arsitektur statis (*Frontend-Only*), proses *deploy* akan sangat mulus tanpa perlu menyiapkan *database*.

1. Hubungkan akun GitHub Anda ke [Vercel](https://vercel.com/).
2. Buat **New Project** dan *import* repositori `Travel-Web-Prosedur`.
3. Klik **Deploy**.
4. Selesai! Web Anda akan langsung aktif.

---
*Dibangun dengan ❤️ untuk memberikan pengalaman keimigrasian digital generasi berikutnya.*
