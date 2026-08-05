import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcryptjs'

const seedPrisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Clear existing topics
  await seedPrisma.topic.deleteMany()

  // 1. Create or Update Admin User
  const adminEmail = 'admin_imigrasi'
  const adminPassword = 'admin_imigrasi'
  
  const hashedPassword = bcrypt.hashSync(adminPassword, 10)

  const admin = await seedPrisma.adminUser.upsert({
    where: { email: adminEmail },
    update: { password: hashedPassword },
    create: {
      email: adminEmail,
      name: 'Super Admin',
      password: hashedPassword,
    },
  })
  console.log('✅ Admin user ready:', admin.email)

  // 2. Create Topic: Syarat Umum
  const umumTopic = await seedPrisma.topic.create({
    data: {
      slug: 'syarat-umum-perjalanan',
      title: 'Syarat Umum Perjalanan ke Luar Negeri',
      description: 'Panduan lengkap persyaratan dokumen keberangkatan ke luar negeri sesuai standar Ditjen Imigrasi.',
      icon: 'plane',
      requirements: {
        create: [
          {
            stepNumber: 1,
            title: 'Paspor Fisik Asli',
            description: 'Masih berlaku minimal 6 (enam) bulan sebelum tanggal kedaluwarsa.',
            isMandatory: true,
          },
          {
            stepNumber: 2,
            title: 'Visa (Jika Tidak Bebas Visa)',
            description: 'Sesuai dengan ketentuan negara tujuan. Pastikan visa sudah disetujui sebelum keberangkatan.',
            isMandatory: true,
          },
          {
            stepNumber: 3,
            title: 'Tiket Perjalanan Pulang Pergi (PP)',
            description: 'Tiket penerbangan yang sah sebagai bukti akan kembali ke negara asal.',
            isMandatory: true,
          },
          {
            stepNumber: 4,
            title: 'Lolos Pemeriksaan Imigrasi',
            description: 'Di Tempat Pemeriksaan Imigrasi (TPI), petugas akan memeriksa dokumen dan wawancara singkat.',
            isMandatory: true,
          }
        ]
      }
    }
  })
  console.log('✅ Topic seeded:', umumTopic.title)

  // 3. Create Topic: Anak di Bawah Umur
  const anakTopic = await seedPrisma.topic.create({
    data: {
      slug: 'anak-di-bawah-umur',
      title: 'Syarat Anak di Bawah Umur Tanpa Pendamping Orang Tua',
      description: 'Ketentuan khusus bagi anak di bawah umur yang bepergian ke luar negeri tanpa didampingi orang tua kandung.',
      icon: 'baby',
      requirements: {
        create: [
          {
            stepNumber: 1,
            title: 'Paspor Anak',
            description: 'Paspor yang sah dan berlaku minimal 6 bulan milik anak.',
            isMandatory: true,
          },
          {
            stepNumber: 2,
            title: 'Surat Keterangan / Izin Orang Tua',
            description: 'Surat izin tertulis dari kedua orang tua kandung yang mengizinkan anak pergi tanpa pendampingan mereka, ditandatangani di atas materai.',
            isMandatory: true,
          },
          {
            stepNumber: 3,
            title: 'Salinan Identitas Orang Tua',
            description: 'Fotokopi KTP/Paspor orang tua kandung yang masih berlaku.',
            isMandatory: true,
          },
          {
            stepNumber: 4,
            title: 'Salinan Akta Kelahiran Anak',
            description: 'Untuk membuktikan hubungan darah antara anak dan orang tua.',
            isMandatory: true,
          },
          {
            stepNumber: 5,
            title: 'Salinan Kartu Keluarga (KK)',
            description: 'Menunjukkan daftar keluarga inti.',
            isMandatory: true,
          }
        ]
      }
    }
  })
  console.log('✅ Topic seeded:', anakTopic.title)
  // 4. Create Topic: Pembuatan Paspor Baru
  const pasporTopic = await seedPrisma.topic.create({
    data: {
      slug: 'pembuatan-paspor-baru',
      title: 'Prosedur Pembuatan Paspor Baru',
      description: 'Langkah-langkah dan persyaratan untuk mengajukan pembuatan paspor RI baru secara online melalui aplikasi M-Paspor.',
      icon: 'book',
      requirements: {
        create: [
          {
            stepNumber: 1,
            title: 'Unduh Aplikasi M-Paspor',
            description: 'Aplikasi M-Paspor dapat diunduh melalui Google Play Store (Android) atau App Store (iOS).',
            isMandatory: true,
          },
          {
            stepNumber: 2,
            title: 'Pendaftaran dan Pengisian Data',
            description: 'Buat akun, pilih jenis paspor (biasa atau elektronik), dan isi formulir data diri dengan lengkap.',
            isMandatory: true,
          },
          {
            stepNumber: 3,
            title: 'Unggah Dokumen Persyaratan',
            description: 'KTP asli, Kartu Keluarga (KK), Akta Kelahiran/Ijazah/Buku Nikah (pilih salah satu). Semua dokumen difoto dengan jelas.',
            isMandatory: true,
          },
          {
            stepNumber: 4,
            title: 'Pilih Kantor Imigrasi dan Jadwal',
            description: 'Pilih lokasi Kantor Imigrasi terdekat dan tentukan tanggal kedatangan yang tersedia.',
            isMandatory: true,
          },
          {
            stepNumber: 5,
            title: 'Pembayaran Kode Billing',
            description: 'Lakukan pembayaran biaya paspor melalui bank, ATM, mobile banking, atau e-commerce sebelum batas waktu kedaluwarsa billing.',
            isMandatory: true,
          },
          {
            stepNumber: 6,
            title: 'Wawancara dan Pengambilan Biometrik',
            description: 'Datang ke Kantor Imigrasi sesuai jadwal dengan membawa seluruh berkas asli. Petugas akan melakukan wawancara, pengambilan foto, dan sidik jari.',
            isMandatory: true,
          }
        ]
      }
    }
  })
  console.log('✅ Topic seeded:', pasporTopic.title)

  // 5. Create Topic: Layanan E-VOA
  const evoaTopic = await seedPrisma.topic.create({
    data: {
      slug: 'layanan-evoa',
      title: 'Layanan E-VOA (Electronic Visa on Arrival)',
      description: 'Panduan pengajuan E-VOA bagi Warga Negara Asing (WNA) yang ingin berkunjung ke Indonesia untuk tujuan wisata atau kunjungan singkat.',
      icon: 'globe',
      requirements: {
        create: [
          {
            stepNumber: 1,
            title: 'Persiapkan Paspor yang Valid',
            description: 'Paspor WNA harus berasal dari negara subjek VOA dan masih berlaku minimal 6 bulan.',
            isMandatory: true,
          },
          {
            stepNumber: 2,
            title: 'Akses Portal Resmi Molina',
            description: 'Buka website resmi imigrasi (molina.imigrasi.go.id) dan buat akun.',
            isMandatory: true,
          },
          {
            stepNumber: 3,
            title: 'Isi Formulir Aplikasi E-VOA',
            description: 'Masukkan informasi paspor, data diri, alamat tempat tinggal selama di Indonesia, dan unggah foto paspor.',
            isMandatory: true,
          },
          {
            stepNumber: 4,
            title: 'Pembayaran Online',
            description: 'Lakukan pembayaran biaya E-VOA menggunakan kartu kredit atau debit berlogo Visa/Mastercard/JCB.',
            isMandatory: true,
          },
          {
            stepNumber: 5,
            title: 'Unduh E-VOA',
            description: 'Setelah disetujui, E-VOA dapat diunduh dalam format PDF. Cetak atau simpan di perangkat digital untuk ditunjukkan pada saat kedatangan.',
            isMandatory: true,
          }
        ]
      }
    }
  })
  console.log('✅ Topic seeded:', evoaTopic.title)

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await seedPrisma.$disconnect()
  })
