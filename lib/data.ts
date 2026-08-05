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
