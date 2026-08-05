# Travel3 - Web Imigrasi & Prosedur Perjalanan 🌍

Travel3 adalah portal informasi modern untuk prosedur imigrasi dan perjalanan antar-negara. Dibangun dengan desain terinspirasi dari tema Web3 (Glassmorphism, Neon Cyberpunk) yang memberikan nuansa futuristik, elegan, namun tetap mudah digunakan (*user-friendly*). 

Proyek ini telah dikembangkan dengan arsitektur **Next.js 14 (App Router)** dan disiapkan khusus agar dapat di-*deploy* secara mulus ke **Vercel**.

## 🚀 Fitur Utama

- **Tampilan Futuristis (Web3 Theme)**: Antarmuka cantik menggunakan efek *backdrop-filter*, *neon glow*, animasi *framer-motion*, dan gradien halus.
- **Pencarian Cerdas**: Pengguna dapat mencari negara destinasi di halaman beranda.
- **Rincian Prosedur Negara**: Halaman khusus untuk tiap negara yang menyajikan panduan perjalanan *(Checklist)* yang dibagi berdasarkan fase (Pra-Keberangkatan, Hari H, Penerbangan, Kedatangan).
- **Unduh PDF Online**: Menghasilkan ringkasan dokumen prosedur perjalanan ke format PDF dengan desain *header/footer* khusus.
- **Secure Admin CMS (Content Management System)**:
  - Portal rahasi untuk menambah, mengedit, dan menghapus Destinasi serta Prosedur.
  - Dropdown pintar yang menampung seluruh negara di dunia dan akan mengisi data (Bendera, Nama, Kode, Mata Uang) secara otomatis.
- **Keamanan Enterprise-Grade (OWASP Top 10)**:
  - **WAF & Rate Limiting**: Memblokir serangan bruteforce dan *scanner* (seperti SQLMap).
  - **Zod Validation**: Mencegah serangan *Cross-Site Scripting* (XSS).
  - **Strict Cache Control & CSP**: Mencegah kebocoran data sensitif dan eksekusi skrip jahat.

## 🛠 Teknologi yang Digunakan
- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS, Vanilla CSS (`globals.css`)
- **Animasi**: Framer Motion
- **Database**: Prisma ORM dengan SQLite (Bisa dengan mudah dimigrasi ke Postgres)
- **Otentikasi & Keamanan**: `jose` (JWT), `bcryptjs`, `zod`
- **Utilitas Tambahan**: `jspdf`, `html2canvas`, `lucide-react`

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

3. **Siapkan Database (SQLite):**
   ```bash
   npx prisma generate
   npx prisma db push
   npx tsx scripts/seed.ts
   ```

4. **Jalankan Server Development:**
   ```bash
   npm run dev
   ```

5. **Akses Portal Admin:**
   - URL: `http://localhost:3000/secure-admin/login`
   - Username: `admin_imigrasi`
   - Password: `admin_imigrasi`

## ☁️ Panduan Deploy ke Vercel

Proyek ini telah dikonfigurasi sepenuhnya untuk Vercel.

1. Hubungkan akun GitHub Anda ke [Vercel](https://vercel.com/).
2. Buat **New Project** dan *import* repositori `Travel-Web-Prosedur`.
3. Di bagian pengaturan (*Environment Variables*), tambahkan:
   - `JWT_SECRET` = `(Isi dengan teks rahasia yang panjang)`
4. Klik **Deploy**.

> **Catatan Database:** Secara *default*, aplikasi ini menggunakan SQLite untuk demonstrasi. Di lingkungan *Serverless* seperti Vercel, data SQLite tidak akan tersimpan permanen. Untuk penggunaan komersial, sangat disarankan mengubah URL *database* di file `.env` ke penyedia **PostgreSQL** seperti Vercel Postgres atau Supabase.

---
*Dibangun dengan ❤️ untuk memberikan pengalaman perjalanan generasi berikutnya.*
