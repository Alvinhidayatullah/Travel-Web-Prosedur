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

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await seedPrisma.$disconnect()
  })
