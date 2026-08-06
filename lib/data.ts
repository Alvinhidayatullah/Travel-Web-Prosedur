export const countries = [
  {
    id: "sg",
    code: "SG",
    name: "Singapura",
    flagUrl: "🇸🇬",
    coverImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    visaType: "Bebas Visa",
    currency: "SGD",
  },
  {
    id: "jp",
    code: "JP",
    name: "Jepang",
    flagUrl: "🇯🇵",
    coverImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    visaType: "e-Visa",
    currency: "JPY",
  },
  {
    id: "kr",
    code: "KR",
    name: "Korea Selatan",
    flagUrl: "🇰🇷",
    coverImage: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    visaType: "e-Visa",
    currency: "KRW",
  },
  {
    id: "uk",
    code: "UK",
    name: "Inggris Raya",
    flagUrl: "🇬🇧",
    coverImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    visaType: "Visa Kedutaan",
    currency: "GBP",
  },
  {
    id: "my",
    code: "MY",
    name: "Malaysia",
    flagUrl: "🇲🇾",
    coverImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    visaType: "Bebas Visa",
    currency: "MYR",
  },
  {
    id: "th",
    code: "TH",
    name: "Thailand",
    flagUrl: "🇹🇭",
    coverImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    visaType: "Bebas Visa",
    currency: "THB",
  },
  {
    id: "au",
    code: "AU",
    name: "Australia",
    flagUrl: "🇦🇺",
    coverImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    visaType: "e-Visa",
    currency: "AUD",
  },
  {
    id: "us",
    code: "US",
    name: "Amerika Serikat",
    flagUrl: "🇺🇸",
    coverImage: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    visaType: "Visa Kedutaan",
    currency: "USD",
  },
  {
    id: "ae",
    code: "AE",
    name: "Uni Emirat Arab",
    flagUrl: "🇦🇪",
    coverImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    visaType: "e-Visa",
    currency: "AED",
  }
];

export const mockProcedures = {
  PRE_DEPARTURE: [
    { id: 1, title: "Paspor Aktif Min. 6 Bulan", description: "Pastikan masa berlaku paspor Anda lebih dari 6 bulan dari tanggal keberangkatan." },
    { id: 2, title: "Apply e-Visa / K-ETA", description: "Lakukan pendaftaran e-Visa minimal 7 hari sebelum keberangkatan (jika diperlukan)." },
    { id: 3, title: "Asuransi Perjalanan", description: "Cetak polis asuransi yang menanggung biaya medis di negara tujuan." }
  ],
  DEPARTURE_DAY: [
    { id: 4, title: "Check-in Maskapai", description: "Siapkan tiket dan paspor di meja check-in." },
    { id: 5, title: "Imigrasi Keluar", description: "Proses cap keluar dari negara asal." }
  ],
  IN_FLIGHT_TRANSIT: [
    { id: 6, title: "Isi Kartu Kedatangan (Arrival Card)", description: "Dapatkan dari pramugari atau isi secara online sebelum mendarat." },
    { id: 7, title: "Deklarasi Pabean (Customs Form)", description: "Isi form bea cukai jika membawa barang berlebih." }
  ],
  ARRIVAL: [
    { id: 8, title: "Imigrasi Masuk", description: "Siapkan paspor, visa, dan bukti akomodasi." },
    { id: 9, title: "Pengambilan Bagasi", description: "Ambil bagasi di carousel yang ditentukan." }
  ]
};

export const topicsData = [
  {
    id: "syarat-umum-perjalanan",
    slug: "syarat-umum-perjalanan",
    title: "Syarat Umum Perjalanan ke Luar Negeri",
    description: "Panduan lengkap persyaratan dokumen keberangkatan ke luar negeri sesuai standar Ditjen Imigrasi.",
    icon: "plane",
    createdAt: new Date("2024-01-01T00:00:00Z"),
    updatedAt: new Date("2024-01-01T00:00:00Z"),
    requirements: [
      {
        id: "req-1",
        stepNumber: 1,
        title: "Paspor Fisik Asli",
        description: "Masih berlaku minimal 6 (enam) bulan sebelum tanggal kedaluwarsa.",
        isMandatory: true,
      },
      {
        id: "req-2",
        stepNumber: 2,
        title: "Visa (Jika Tidak Bebas Visa)",
        description: "Sesuai dengan ketentuan negara tujuan. Pastikan visa sudah disetujui sebelum keberangkatan.",
        isMandatory: true,
      },
      {
        id: "req-3",
        stepNumber: 3,
        title: "Tiket Perjalanan Pulang Pergi (PP)",
        description: "Tiket penerbangan yang sah sebagai bukti akan kembali ke negara asal.",
        isMandatory: true,
      },
      {
        id: "req-4",
        stepNumber: 4,
        title: "Lolos Pemeriksaan Imigrasi",
        description: "Di Tempat Pemeriksaan Imigrasi (TPI), petugas akan memeriksa dokumen dan wawancara singkat.",
        isMandatory: true,
      }
    ],
    _count: { requirements: 4 }
  },
  {
    id: "anak-di-bawah-umur",
    slug: "anak-di-bawah-umur",
    title: "Syarat Anak di Bawah Umur Tanpa Pendamping Orang Tua",
    description: "Ketentuan khusus bagi anak di bawah umur yang bepergian ke luar negeri tanpa didampingi orang tua kandung.",
    icon: "baby",
    createdAt: new Date("2024-01-01T00:00:00Z"),
    updatedAt: new Date("2024-01-01T00:00:00Z"),
    requirements: [
      {
        id: "req-5",
        stepNumber: 1,
        title: "Paspor Anak",
        description: "Paspor yang sah dan berlaku minimal 6 bulan milik anak.",
        isMandatory: true,
      },
      {
        id: "req-6",
        stepNumber: 2,
        title: "Surat Keterangan / Izin Orang Tua",
        description: "Surat izin tertulis dari kedua orang tua kandung yang mengizinkan anak pergi tanpa pendampingan mereka, ditandatangani di atas materai.",
        isMandatory: true,
      },
      {
        id: "req-7",
        stepNumber: 3,
        title: "Salinan Identitas Orang Tua",
        description: "Fotokopi KTP/Paspor orang tua kandung yang masih berlaku.",
        isMandatory: true,
      },
      {
        id: "req-8",
        stepNumber: 4,
        title: "Salinan Akta Kelahiran Anak",
        description: "Untuk membuktikan hubungan darah antara anak dan orang tua.",
        isMandatory: true,
      },
      {
        id: "req-9",
        stepNumber: 5,
        title: "Salinan Kartu Keluarga (KK)",
        description: "Menunjukkan daftar keluarga inti.",
        isMandatory: true,
      }
    ],
    _count: { requirements: 5 }
  },
  {
    id: "pembuatan-paspor-baru",
    slug: "pembuatan-paspor-baru",
    title: "Prosedur Pembuatan Paspor Baru",
    description: "Langkah-langkah dan persyaratan untuk mengajukan pembuatan paspor RI baru secara online melalui aplikasi M-Paspor.",
    icon: "book",
    createdAt: new Date("2024-01-01T00:00:00Z"),
    updatedAt: new Date("2024-01-01T00:00:00Z"),
    requirements: [
      {
        id: "req-10",
        stepNumber: 1,
        title: "Unduh Aplikasi M-Paspor",
        description: "Aplikasi M-Paspor dapat diunduh melalui Google Play Store (Android) atau App Store (iOS).",
        isMandatory: true,
      },
      {
        id: "req-11",
        stepNumber: 2,
        title: "Pendaftaran dan Pengisian Data",
        description: "Buat akun, pilih jenis paspor (biasa atau elektronik), dan isi formulir data diri dengan lengkap.",
        isMandatory: true,
      },
      {
        id: "req-12",
        stepNumber: 3,
        title: "Unggah Dokumen Persyaratan",
        description: "KTP asli, Kartu Keluarga (KK), Akta Kelahiran/Ijazah/Buku Nikah (pilih salah satu). Semua dokumen difoto dengan jelas.",
        isMandatory: true,
      },
      {
        id: "req-13",
        stepNumber: 4,
        title: "Pilih Kantor Imigrasi dan Jadwal",
        description: "Pilih lokasi Kantor Imigrasi terdekat dan tentukan tanggal kedatangan yang tersedia.",
        isMandatory: true,
      },
      {
        id: "req-14",
        stepNumber: 5,
        title: "Pembayaran Kode Billing",
        description: "Lakukan pembayaran biaya paspor melalui bank, ATM, mobile banking, atau e-commerce sebelum batas waktu kedaluwarsa billing.",
        isMandatory: true,
      },
      {
        id: "req-15",
        stepNumber: 6,
        title: "Wawancara dan Pengambilan Biometrik",
        description: "Datang ke Kantor Imigrasi sesuai jadwal dengan membawa seluruh berkas asli. Petugas akan melakukan wawancara, pengambilan foto, dan sidik jari.",
        isMandatory: true,
      }
    ],
    _count: { requirements: 6 }
  },
  {
    id: "informasi-visa",
    slug: "informasi-visa",
    title: "Persyaratan & Ketentuan Berbagai Jenis Visa",
    description: "Panduan lengkap pengajuan visa (e-Visa, Visa Kunjungan, Visa Tinggal Terbatas) sesuai standar Direktorat Jenderal Imigrasi.",
    icon: "globe",
    createdAt: new Date("2024-01-01T00:00:00Z"),
    updatedAt: new Date("2024-01-01T00:00:00Z"),
    requirements: [],
    _count: { requirements: 0 },
    subTopics: [
      {
        id: "e-visa",
        slug: "e-visa",
        title: "e-Visa (Visa Elektronik)",
        description: "Visa yang diajukan secara online untuk tujuan wisata, kunjungan keluarga, atau bisnis singkat.",
        icon: "globe",
        createdAt: new Date("2024-01-01T00:00:00Z"),
        updatedAt: new Date("2024-01-01T00:00:00Z"),
        requirements: [
          { id: "evisa-1", stepNumber: 1, title: "Paspor Aktif Min. 6 Bulan", description: "Paspor asli harus masih berlaku minimal 6 bulan.", isMandatory: true },
          { id: "evisa-2", stepNumber: 2, title: "Registrasi Online", description: "Mendaftar melalui portal resmi molina.imigrasi.go.id.", isMandatory: true },
          { id: "evisa-3", stepNumber: 3, title: "Pembayaran Online", description: "Membayar PNBP menggunakan kartu kredit/debit jaringan Visa/Mastercard/JCB.", isMandatory: true }
        ],
        _count: { requirements: 3 }
      },
      {
        id: "visa-kunjungan",
        slug: "visa-kunjungan",
        title: "Visa Kunjungan",
        description: "Visa untuk tujuan kunjungan pemerintah, pendidikan, sosial budaya, wisata, atau jurnalis.",
        icon: "book",
        createdAt: new Date("2024-01-01T00:00:00Z"),
        updatedAt: new Date("2024-01-01T00:00:00Z"),
        requirements: [
          { id: "vk-1", stepNumber: 1, title: "Paspor Sah", description: "Paspor kebangsaan yang sah dan masih berlaku paling singkat 6 bulan.", isMandatory: true },
          { id: "vk-2", stepNumber: 2, title: "Surat Penjaminan", description: "Surat penjaminan dari Penjamin, kecuali untuk Visa Kunjungan Wisata.", isMandatory: false },
          { id: "vk-3", stepNumber: 3, title: "Bukti Biaya Hidup", description: "Bukti memiliki biaya hidup bagi diri dan/atau keluarga (min. USD 2000).", isMandatory: true },
          { id: "vk-4", stepNumber: 4, title: "Tiket Kembali", description: "Tiket kembali atau tiket terusan ke negara lain.", isMandatory: true }
        ],
        _count: { requirements: 4 }
      },
      {
        id: "vitas",
        slug: "vitas",
        title: "Visa Tinggal Terbatas (VITAS)",
        description: "Visa untuk tenaga kerja asing, investor, pelajar, atau penyatuan keluarga.",
        icon: "plane",
        createdAt: new Date("2024-01-01T00:00:00Z"),
        updatedAt: new Date("2024-01-01T00:00:00Z"),
        requirements: [
          { id: "vitas-1", stepNumber: 1, title: "Paspor Sah (Min. 12-30 Bulan)", description: "Paspor sah dan masih berlaku, durasi menyesuaikan izin tinggal yang diminta.", isMandatory: true },
          { id: "vitas-2", stepNumber: 2, title: "Surat Rekomendasi/Izin", description: "Surat rekomendasi dari instansi terkait (misal Kemenaker untuk pekerja).", isMandatory: true },
          { id: "vitas-3", stepNumber: 3, title: "Riwayat Kesehatan & Kriminal", description: "Surat keterangan sehat dan bukti tidak memiliki riwayat kejahatan (untuk negara tertentu).", isMandatory: true }
        ],
        _count: { requirements: 3 }
      },
      {
        id: "visa-keberangkatan-khusus",
        slug: "visa-keberangkatan-khusus",
        title: "Visa Keberangkatan Khusus",
        description: "Visa atau izin khusus untuk keperluan evakuasi medis, misi diplomatik, atau keadaan darurat.",
        icon: "baby",
        createdAt: new Date("2024-01-01T00:00:00Z"),
        updatedAt: new Date("2024-01-01T00:00:00Z"),
        requirements: [
          { id: "vks-1", stepNumber: 1, title: "Surat Pengantar Instansi Resmi", description: "Dokumen pengantar dari Kementerian Luar Negeri atau Instansi/Organisasi berwenang.", isMandatory: true },
          { id: "vks-2", stepNumber: 2, title: "Dokumen Kedokteran (Untuk Medis)", description: "Rujukan medis dari rumah sakit untuk evakuasi darurat.", isMandatory: false }
        ],
        _count: { requirements: 2 }
      }
    ]
  }
];
