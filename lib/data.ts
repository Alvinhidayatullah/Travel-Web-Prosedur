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
    id: "keberangkatan-khusus",
    slug: "keberangkatan-khusus",
    title: "Syarat Keberangkatan Khusus",
    description: "Ketentuan khusus bagi anak di bawah umur, jemaah haji/umrah, pekerja migran, dan keperluan medis.",
    icon: "shield-alert",
    createdAt: new Date("2024-01-01T00:00:00Z"),
    updatedAt: new Date("2024-01-01T00:00:00Z"),
    requirements: [],
    _count: { requirements: 0 },
    subTopics: [
      {
        id: "anak-di-bawah-umur",
        slug: "anak-di-bawah-umur",
        title: "Syarat Anak di Bawah Umur Tanpa Pendamping Orang Tua",
        description: "Ketentuan khusus bagi anak di bawah umur yang bepergian ke luar negeri tanpa didampingi orang tua kandung.",
        icon: "baby",
        createdAt: new Date("2024-01-01T00:00:00Z"),
        updatedAt: new Date("2024-01-01T00:00:00Z"),
        requirements: [
          { id: "req-5", stepNumber: 1, title: "Paspor Anak", description: "Paspor yang sah dan berlaku minimal 6 bulan milik anak.", isMandatory: true },
          { id: "req-6", stepNumber: 2, title: "Surat Keterangan / Izin Orang Tua", description: "Surat izin tertulis dari kedua orang tua kandung yang mengizinkan anak pergi tanpa pendampingan mereka, ditandatangani di atas materai.", isMandatory: true },
          { id: "req-7", stepNumber: 3, title: "Salinan Identitas Orang Tua", description: "Fotokopi KTP/Paspor orang tua kandung yang masih berlaku.", isMandatory: true },
          { id: "req-8", stepNumber: 4, title: "Salinan Akta Kelahiran Anak", description: "Untuk membuktikan hubungan darah antara anak dan orang tua.", isMandatory: true },
          { id: "req-9", stepNumber: 5, title: "Salinan Kartu Keluarga (KK)", description: "Menunjukkan daftar keluarga inti.", isMandatory: true }
        ],
        _count: { requirements: 5 }
      },
      {
        id: "pekerja-migran-indonesia",
        slug: "pekerja-migran-indonesia",
        title: "Pekerja Migran Indonesia (PMI)",
        description: "Syarat keberangkatan khusus bagi WNI yang akan bekerja di luar negeri sesuai ketentuan BP2MI.",
        icon: "briefcase",
        createdAt: new Date("2024-01-01T00:00:00Z"),
        updatedAt: new Date("2024-01-01T00:00:00Z"),
        requirements: [
          { id: "pmi-1", stepNumber: 1, title: "Paspor Sah", description: "Paspor yang sah dan masih berlaku paling singkat 6 bulan.", isMandatory: true },
          { id: "pmi-2", stepNumber: 2, title: "Visa Kerja (Working Visa)", description: "Visa kerja dari negara tujuan yang masih berlaku.", isMandatory: true },
          { id: "pmi-3", stepNumber: 3, title: "E-KTKLN / Surat BP2MI", description: "Kartu Tenaga Kerja Luar Negeri elektronik atau dokumen setara dari BP2MI.", isMandatory: true },
          { id: "pmi-4", stepNumber: 4, title: "Perjanjian Kerja", description: "Salinan perjanjian kerja yang telah disahkan.", isMandatory: true }
        ],
        _count: { requirements: 4 }
      },
      {
        id: "jemaah-haji-umrah",
        slug: "jemaah-haji-umrah",
        title: "Jemaah Haji / Umrah",
        description: "Persyaratan dokumen perjalanan bagi WNI yang hendak melaksanakan ibadah Haji atau Umrah.",
        icon: "landmark",
        createdAt: new Date("2024-01-01T00:00:00Z"),
        updatedAt: new Date("2024-01-01T00:00:00Z"),
        requirements: [
          { id: "haji-1", stepNumber: 1, title: "Paspor Sah", description: "Paspor sah dengan nama minimal 2 atau 3 suku kata (sesuai aturan Arab Saudi terbaru).", isMandatory: true },
          { id: "haji-2", stepNumber: 2, title: "Visa Haji / Umrah", description: "Visa khusus ibadah dari Kedutaan Arab Saudi.", isMandatory: true },
          { id: "haji-3", stepNumber: 3, title: "Sertifikat Vaksinasi", description: "Sertifikat vaksinasi meningitis atau vaksin lain yang disyaratkan oleh negara tujuan.", isMandatory: true },
          { id: "haji-4", stepNumber: 4, title: "Surat Rekomendasi Kemenag", description: "Untuk pengajuan paspor baru khusus umrah/haji, dibutuhkan rekomendasi dari Kementerian Agama.", isMandatory: false }
        ],
        _count: { requirements: 4 }
      },
      {
        id: "evakuasi-medis",
        slug: "evakuasi-medis",
        title: "Evakuasi Medis & Orang Sakit",
        description: "Prosedur keimigrasian darurat untuk pasien yang harus segera diberangkatkan ke luar negeri.",
        icon: "heart-pulse",
        createdAt: new Date("2024-01-01T00:00:00Z"),
        updatedAt: new Date("2024-01-01T00:00:00Z"),
        requirements: [
          { id: "med-1", stepNumber: 1, title: "Paspor Pasien & Pendamping", description: "Paspor pasien dan keluarga yang mendampingi.", isMandatory: true },
          { id: "med-2", stepNumber: 2, title: "Surat Rujukan Medis", description: "Surat rujukan darurat dari rumah sakit di Indonesia ke rumah sakit tujuan.", isMandatory: true },
          { id: "med-3", stepNumber: 3, title: "Layanan Jemput Bola Imigrasi", description: "Keluarga dapat mengajukan layanan pembuatan paspor darurat di rumah sakit jika pasien belum memiliki paspor.", isMandatory: true }
        ],
        _count: { requirements: 3 }
      }
    ]
  },
  {
    id: "informasi-paspor",
    slug: "informasi-paspor",
    title: "Layanan & Prosedur Paspor RI",
    description: "Panduan lengkap pengajuan paspor baru, perpanjangan, penggantian paspor hilang/rusak, dan layanan percepatan.",
    icon: "book",
    createdAt: new Date("2024-01-01T00:00:00Z"),
    updatedAt: new Date("2024-01-01T00:00:00Z"),
    requirements: [],
    _count: { requirements: 0 },
    subTopics: [
      {
        id: "pembuatan-paspor-baru",
        slug: "pembuatan-paspor-baru",
        title: "Pembuatan Paspor Baru",
        description: "Langkah-langkah dan persyaratan untuk mengajukan pembuatan paspor RI baru secara online melalui aplikasi M-Paspor.",
        icon: "book",
        createdAt: new Date("2024-01-01T00:00:00Z"),
        updatedAt: new Date("2024-01-01T00:00:00Z"),
        requirements: [
          { id: "req-10", stepNumber: 1, title: "Unduh Aplikasi M-Paspor", description: "Aplikasi M-Paspor dapat diunduh melalui Google Play Store (Android) atau App Store (iOS).", isMandatory: true },
          { id: "req-11", stepNumber: 2, title: "Pendaftaran dan Pengisian Data", description: "Buat akun, pilih jenis paspor (biasa atau elektronik), dan isi formulir data diri dengan lengkap.", isMandatory: true },
          { id: "req-12", stepNumber: 3, title: "Unggah Dokumen Persyaratan", description: "KTP asli, Kartu Keluarga (KK), Akta Kelahiran/Ijazah/Buku Nikah (pilih salah satu). Semua dokumen difoto dengan jelas.", isMandatory: true },
          { id: "req-13", stepNumber: 4, title: "Pilih Kantor Imigrasi dan Jadwal", description: "Pilih lokasi Kantor Imigrasi terdekat dan tentukan tanggal kedatangan yang tersedia.", isMandatory: true },
          { id: "req-14", stepNumber: 5, title: "Pembayaran Kode Billing", description: "Lakukan pembayaran biaya paspor melalui bank, ATM, mobile banking, atau e-commerce sebelum batas waktu kedaluwarsa billing.", isMandatory: true },
          { id: "req-15", stepNumber: 6, title: "Wawancara dan Pengambilan Biometrik", description: "Datang ke Kantor Imigrasi sesuai jadwal dengan membawa seluruh berkas asli. Petugas akan melakukan wawancara, pengambilan foto, dan sidik jari.", isMandatory: true }
        ],
        _count: { requirements: 6 }
      },
      {
        id: "perpanjangan-paspor",
        slug: "perpanjangan-paspor",
        title: "Penggantian Paspor Habis Berlaku",
        description: "Prosedur perpanjangan paspor lama keluaran tahun 2009 ke atas secara online via M-Paspor.",
        icon: "refresh-cw",
        createdAt: new Date("2024-01-01T00:00:00Z"),
        updatedAt: new Date("2024-01-01T00:00:00Z"),
        requirements: [
          { id: "perp-1", stepNumber: 1, title: "Siapkan KTP & Paspor Lama", description: "Cukup siapkan KTP elektronik (e-KTP) asli dan paspor lama Anda (yang terbit setelah 2009).", isMandatory: true },
          { id: "perp-2", stepNumber: 2, title: "Daftar di Aplikasi M-Paspor", description: "Pilih opsi 'Penggantian Paspor', unggah foto KTP dan halaman identitas paspor lama.", isMandatory: true },
          { id: "perp-3", stepNumber: 3, title: "Pembayaran & Penjadwalan", description: "Bayar kode billing PNBP dan pilih jadwal kedatangan di Kantor Imigrasi tujuan.", isMandatory: true },
          { id: "perp-4", stepNumber: 4, title: "Wawancara & Foto", description: "Hadir di kantor Imigrasi sesuai jadwal. Bawa e-KTP asli dan Paspor lama asli untuk diverifikasi.", isMandatory: true }
        ],
        _count: { requirements: 4 }
      },
      {
        id: "paspor-hilang-rusak",
        slug: "paspor-hilang-rusak",
        title: "Penggantian Paspor Hilang / Rusak",
        description: "Langkah-langkah untuk mengurus penggantian paspor yang hilang atau rusak, beserta sanksi dendanya.",
        icon: "alert-triangle",
        createdAt: new Date("2024-01-01T00:00:00Z"),
        updatedAt: new Date("2024-01-01T00:00:00Z"),
        requirements: [
          { id: "phr-1", stepNumber: 1, title: "Surat Keterangan Kehilangan Kepolisian", description: "Wajib membawa surat laporan kehilangan dari kepolisian setempat (jika paspor hilang).", isMandatory: true },
          { id: "phr-2", stepNumber: 2, title: "Dokumen Persyaratan Lengkap", description: "KTP, KK, dan Akta Kelahiran/Ijazah/Buku Nikah (sama seperti pengajuan paspor baru).", isMandatory: true },
          { id: "phr-3", stepNumber: 3, title: "Berita Acara Pemeriksaan (BAP)", description: "Pemohon akan di-BAP oleh petugas imigrasi untuk mengetahui alasan kehilangan/kerusakan.", isMandatory: true },
          { id: "phr-4", stepNumber: 4, title: "Pembayaran Denda & Biaya Paspor", description: "Jika disetujui, pemohon harus membayar biaya buku paspor ditambah denda (Rp 1.000.000 untuk paspor hilang, Rp 500.000 untuk rusak).", isMandatory: true }
        ],
        _count: { requirements: 4 }
      },
      {
        id: "percepatan-paspor",
        slug: "percepatan-paspor",
        title: "Layanan Percepatan Paspor Selesai Pada Hari yang Sama",
        description: "Layanan prioritas walk-in untuk mendapatkan paspor selesai pada hari yang sama (One Day Service).",
        icon: "zap",
        createdAt: new Date("2024-01-01T00:00:00Z"),
        updatedAt: new Date("2024-01-01T00:00:00Z"),
        requirements: [
          { id: "cep-1", stepNumber: 1, title: "Datang Langsung (Walk-In)", description: "Datang langsung (tanpa aplikasi M-Paspor) ke Kantor Imigrasi penyedia layanan sebelum pukul 10.00 pagi.", isMandatory: true },
          { id: "cep-2", stepNumber: 2, title: "Siapkan Dokumen Asli & Fotokopi", description: "Siapkan seluruh persyaratan dokumen asli dan fotokopi (KTP, KK, Akta/Ijazah/Buku Nikah, atau Paspor Lama).", isMandatory: true },
          { id: "cep-3", stepNumber: 3, title: "Pembayaran Ekstra PNBP Percepatan", description: "Membayar biaya buku paspor (Biasa Rp 350.000 / Elektronik Rp 650.000) DITAMBAH biaya PNBP layanan percepatan Rp 1.000.000.", isMandatory: true },
          { id: "cep-4", stepNumber: 4, title: "Pengambilan Paspor Sore Hari", description: "Lakukan proses foto dan wawancara. Paspor akan selesai dan dapat diambil pada sore harinya.", isMandatory: true }
        ],
        _count: { requirements: 4 }
      },
      {
        id: "paspor-anak",
        slug: "paspor-anak",
        title: "Pembuatan Paspor Anak (Di Bawah 17 Tahun)",
        description: "Prosedur khusus dan persyaratan wajib bagi anak usia di bawah 17 tahun dan belum menikah.",
        icon: "baby",
        createdAt: new Date("2024-01-01T00:00:00Z"),
        updatedAt: new Date("2024-01-01T00:00:00Z"),
        requirements: [
          { id: "pak-1", stepNumber: 1, title: "KTP Kedua Orang Tua", description: "Membawa e-KTP asli kedua orang tua kandung beserta fotokopinya.", isMandatory: true },
          { id: "pak-2", stepNumber: 2, title: "Kartu Keluarga (KK)", description: "Kartu Keluarga yang mencantumkan nama anak secara jelas (asli dan fotokopi).", isMandatory: true },
          { id: "pak-3", stepNumber: 3, title: "Akta Kelahiran Anak", description: "Akta kelahiran asli milik anak beserta fotokopi.", isMandatory: true },
          { id: "pak-4", stepNumber: 4, title: "Buku Nikah Orang Tua", description: "Buku nikah atau akta perkawinan orang tua asli beserta fotokopi.", isMandatory: true },
          { id: "pak-5", stepNumber: 5, title: "Paspor Orang Tua", description: "Paspor kedua orang tua (jika memiliki).", isMandatory: false },
          { id: "pak-6", stepNumber: 6, title: "Kehadiran Wajib", description: "Anak harus hadir untuk pengambilan foto & biometrik, serta diwajibkan didampingi oleh kedua orang tua.", isMandatory: true }
        ],
        _count: { requirements: 6 }
      }
    ]
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
        icon: "laptop",
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
        icon: "users",
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
        icon: "briefcase",
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
        icon: "shield-alert",
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
