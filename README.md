```text
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   ██████╗ ██████╗ ██╗   ██╗ █████╗ ███╗   ██╗            ║
║   ██╔══██╗██╔══██╗╚██╗ ██╔╝██╔══██╗████╗  ██║            ║
║   ██████╔╝██████╔╝ ╚████╔╝ ███████║██╔██╗ ██║            ║
║   ██╔══██╗██╔══██╗  ╚██╔╝  ██╔══██║██║╚██╗██║            ║
║   ██████╔╝██║  ██║   ██║   ██║  ██║██║ ╚████║            ║
║   ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝            ║
║                                                          ║
║         PARALEL SPACE - Version 1.0                      ║
╚══════════════════════════════════════════════════════════╝
```

# 🚀 Next.js Auth Template: Paralel Space Edition

> **Template autentikasi canggih & siap pakai** yang dibangun dengan teknologi paling modern oleh **brynnnn12**

Sebuah sistem autentikasi *(authentication)* lengkap dan berstandar produksi yang dibangun di atas Next.js 16 App Router. Dilengkapi dengan fitur masuk/daftar via Email & Password, integrasi Google OAuth, serta antarmuka (UI) memukau menggunakan komponen Shadcn/UI dan Tailwind CSS.

## ✨ Fitur Unggulan

### 🔐 Autentikasi & Keamanan Terdepan
- **Kredensial Aman**: Pendaftaran & proses penetapan sandi dengan enkripsi (otomatis di-hash).
- **Google OAuth**: Integrasi *social login* menggunakan akun Google dengan sekali klik (SSO).
- **Login Otomatis (Seamless)**: Otomatis masuk ke halaman Dashboard setelah pendaftaran sukses tanpa perlu mengetik ulang sandi.
- **Sesi Bebas Kendala**: Manajemen sesi presisten dan kokoh menggunakan standar terbaru.
- **Proteksi Rute Ketat**: Dilengkapi `proxy.ts` (middleware) yang mencegah tamu tak diundang untuk mengakses wilayah `/dashboard/*`.

### 🎨 Desain Antarmuka (UI & UX)
- **Shadcn/UI & Lucide**: Komponen antarmuka yang sangat mudah diakses, modular, interaktif, serta memanjakan mata.
- **Responsivitas Penuh**: Dirancang dengan struktur *mobile-first* sehingga cantik dipandang dari layar ponsel hingga layar _ultrawide_.
- **Loading Skeleton**: Transisi halus antar halaman (seperti halaman *Profil*) yang melesatkan bayangan kerangka elegan (mencegah _blank screen_).
- **Pemberitahuan Elegan**: Umpan balik berbasis *Toast* cerdas (menggunakan Sonner) versi **Bahasa Indonesia** ketika terjadi kesalahan atau kesuksesan.
- **Validasi Terpadu**: Formulir cerdas dengan pemeriksa ganda di sisi pengguna memakai Zod + React Hook Form.

### 🛠️ Stack Teknologi di Balik Kap
- **Framework Inti**: Next.js 16.2.4 (App Router)
- **Basis Data Serverless**: PostgreSQL (Sangat optimal dengan Neon DB)
- **ORM Tercanggih**: Drizzle ORM
- **Manajer Autentikasi**: Better Auth
- **Penyusun Gaya Visual**: Tailwind CSS

---

## 🚀 Panduan Memulai Cepat (Quick Start)

### Prasyarat
- Lingkungan `Node.js 18` atau yang lebih baru.
- Pangkalan data (Database) relasional PostgreSQL (Sangat direkomendasikan memakai cloud database seperti [Neon.tech](https://neon.tech/)).
- Kredensial URL OAuth dari Google (Bila Anda ingin menyalakan fitur masuk via Google).

### Langkah-langkah Instalasi

1. **Kloning Repositori**
   Mulai dengan menyalin kode basis milik Paralel Space:
   ```bash
   git clone https://github.com/brynnnn12/next-auth.git
   cd next-auth
   ```

2. **Instalasi Dependensi**
   Pasang semua perpustakaan pendukung yang dibutuhkan:
   ```bash
   npm install
   ```

3. **Inisiasi Variabel Lingkungan (*Environment*)**
   Salin berkas identitas `.env.example` menjadi `.env` lalu isikan dengan nilai nyata proyek Anda:
   ```env
   # Koneksi Basis Data
   DATABASE_URL="postgresql://username:password@host:port/database"

   # Identitas Rahasia Better Auth
   BETTER_AUTH_SECRET="kunci-rahasia-acak-anda-disini"
   BETTER_AUTH_URL="http://localhost:3000"

   # Kredensial Google OAuth (Opsional, tapi direkomendasikan)
   GOOGLE_CLIENT_ID="id-klien-google-anda"
   GOOGLE_CLIENT_SECRET="rahasia-klien-google-anda"
   ```

4. **Konfigurasi Autentikasi Google OAuth**
   - Singgahi [Google Cloud Console](https://console.cloud.google.com/)
   - Nyalakan API **Google People API** atau setara di dalam *Project* Anda.
   - Buat kredensial jenis **OAuth 2.0 Web Application**
   - Tambahkan *Authorized redirect URI*: `http://localhost:3000/api/auth/callback/google`
   - Tambahkan *Authorized JavaScript origin*: `http://localhost:3000`

5. **Menerapkan Struktur Dasar (Migrasi Database)**
   Tancapkan susunan tabel ke dalam layanan *Postgres* Anda dengan Drizzle:
   ```bash
   npx drizzle-kit generate
   npx drizzle-kit migrate
   ```

6. **Mulai Pemancaran Secara Lokal**
   Nyalakan mesin jet Anda:
   ```bash
   npm run dev
   ```

7. Buka peramban ke **[http://localhost:3000](http://localhost:3000)** dan nikmati Paralel Space perdana Anda! 🎉

---

## 📁 Penjelasan Struktur Inti Sistem

```text
next-auth/
├── app/                          # Ekosistem Next.js App Router (Ruang Udara)
│   ├── (auth)/                   # Halaman Bebas Autentikasi (Cth: Masuk & Daftar)
│   ├── api/auth/[...all]/        # Titik Akhir (Endpoint) Sentral Better Auth
│   ├── dashboard/                # Area Privat Tertutup (Membutuhkan Sesi)
│   └── globals.css               # Injeksi Gaya Dasar CSS
├── components/                   # Koleksi Instrumen React (Peralatan)
│   ├── auth/                     # Formulir Intelegensi Pendaftaran & Login
│   └── ui/                       # Material Mentah Antarmuka (Shadcn/UI)
├── lib/                          # Ruang Kawat Kelistrikan
│   ├── auth.ts                   # Modul Mesin Auth Utama Sisi Server
│   └── auth-client.ts            # Adaptor Auth Sisi Pengguna (Browser)
├── db/                           # Konfigurasi Brankas Data
│   ├── drizzle.ts                # Sambungan Utama Drizzle ORM
│   └── schema.ts                 # Denah Biru Tabel Basis Data
└── proxy.ts                      # Palang Pintu Pengaman (Middleware) Rute Dasbor
```

## 🤝 Turut Berkontribusi
Paralel Space dirancang agar berkesinambungan dan berkembang seiring waktu! Jika Anda tertarik mempercantiknya lebih lanjut:
1. *Fork* repositori master ini.
2. Buat sub-jalur (*branch*) rancangan perbaikan Anda (Contoh: `git checkout -b perbaikan-animasi-hero`).
3. Komit seluruh hasil kreasi secara bertahap.
4. Ajukan *Pull Request* dan sengketa akan segera kami ulas!

## 📄 Lisensi Kesepakatan
Proyek mutakhir ini digratiskan dan diedarkan di bawah bendera sumber terbuka dan tunduk di bagian perlindungan [MIT License](LICENSE).

---
**PARALEL SPACE © 2026** — *Digarap dan Disempurnakan dengan ❤️ di bumi oleh [brynnnn12](https://github.com/brynnnn12)*
