import Link from "next/link";
import { ShieldCheck, Lock, Zap, Palette, ArrowRight, GitGraph } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-background selection:bg-primary/20">
      {/* Navbar Minimalis */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2 transition-transform hover:scale-105">
            <ShieldCheck className="size-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">Next Auth</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#fitur" className="text-muted-foreground transition-colors hover:text-primary">
              Fitur Utama
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              Masuk
            </Link>
            <Link 
              href="/register" 
              className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Mulai Sekarang
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Desain Hero Section Baru dengan Pola Latar Belakang */}
        <section className="relative w-full py-24 lg:py-32 xl:py-48 overflow-hidden flex items-center justify-center">
          {/* Efek Latar Belakang Grid & Gradient */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
            <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-6">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-sm transition-all hover:bg-primary/20 cursor-default">
                <span className="relative flex size-2.5 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-2.5 bg-primary"></span>
                </span>
                Template Siap Pakai
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                Autentikasi Aman untuk <br className="hidden md:inline" />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Aplikasi Next.js</span>
              </h1>
              <p className="max-w-[46rem] text-balance leading-relaxed text-muted-foreground sm:text-xl sm:leading-8">
                Sistem autentikasi lengkap dan siap produksi yang dibangun dengan Next.js 16, 
                Better Auth, Drizzle ORM, dan komponen memukau dari Shadcn UI.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
                <Link 
                  href="/register" 
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg transition-transform hover:bg-primary/90 hover:scale-105 active:scale-95"
                >
                  Mulai Membangun <ArrowRight className="ml-2 size-5" />
                </Link>
                <Link 
                  href="https://github.com/brynnnn12/next-auth" 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border-2 border-input bg-background/50 backdrop-blur-sm px-8 text-base font-medium shadow-sm transition-transform hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95"
                >
                  <GitGraph className="mr-2 size-5" /> Lihat Github
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bagian Fitur Utama */}
        <section id="fitur" className="w-full py-20 lg:py-32 relative">
          {/* Pembatas Dekoratif */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">Teknologi Modern</h2>
              <p className="max-w-[85%] text-muted-foreground sm:text-lg leading-relaxed text-balance">
                Semua yang Anda butuhkan untuk memulai proyek berikutnya dengan fondasi autentikasi yang solid dan skalabel.
              </p>
            </div>
            
            <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-5xl lg:grid-cols-3">
              {/* Kartu Fitur 1 */}
              <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-6 transition-transform group-hover:scale-110">
                    <Lock className="size-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Aman Secara Default</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Didukung oleh Better Auth, menyediakan keamanan yang tangguh, manajemen sesi modern, dan pengamanan kredensial otomatis.
                  </p>
                </div>
              </div>

              {/* Kartu Fitur 2 */}
              <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-6 transition-transform group-hover:scale-110">
                    <Zap className="size-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Sangat Cepat</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dibangun di atas Next.js 16 App Router dan Drizzle ORM untuk performa optimal serta kompatibilitas Edge network murni.
                  </p>
                </div>
              </div>

              {/* Kartu Fitur 3 */}
              <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-6 transition-transform group-hover:scale-110">
                    <Palette className="size-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">UI/UX Elegan</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Didesain dengan Tailwind CSS framework dan komponen Shadcn UI untuk menyajikan antarmuka yang modern, responsif, dan rapi sejak awal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Minimalis */}
      <footer className="w-full border-t bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 px-4 md:h-24 md:flex-row md:py-0 md:px-8 text-center md:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-6 text-primary" />
            <p className="text-sm font-medium text-muted-foreground">
              Dibuat oleh <a href="https://github.com/brynnnn12" target="_blank" rel="noreferrer" className="font-bold tracking-tight text-foreground underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-colors">brynnnn12</a>
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Template Next Auth. Hak cipta dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}
