import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Zap,
  Palette,
  ArrowRight,
  GitGraph,
  Star,
  Database,
} from "lucide-react";


export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

        <div className="absolute left-[-100px] top-[300px] h-[300px] w-[300px] rounded-full bg-accent/20 blur-3xl" />

        <div className="absolute bottom-[-100px] right-[-100px] h-[400px] w-[400px] rounded-full bg-secondary/20 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
              <ShieldCheck className="size-5 text-primary" />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight">
                Next Auth
              </h1>

              <p className="text-xs text-muted-foreground">
                Template Autentikasi
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Fitur
            </Link>

            <Link
              href="#preview"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Pratinjau
            </Link>

            <Link
              href="#faq"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Tanya Jawab
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:block"
            >
              Masuk
            </Link>

            <Link
              href="/register"
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
            >
              Mulai Sekarang
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative py-12 lg:py-22">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-5xl text-center">
              <div
                data-aos="fade-down"
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-medium text-primary backdrop-blur"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>

                  <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
                </span>

                Autentikasi Siap Produksi
              </div>

              <h1
                data-aos="fade-up"
                className="text-balance text-5xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl"
              >
                Bangun Aplikasi
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {" "}
                  Next.js{" "}
                </span>
                Lebih Cepat dari Biasanya
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
              >
                Template autentikasi siap produksi dengan Better Auth,
                Drizzle ORM, Tailwind CSS, dan Shadcn UI. Arsitektur rapi,
                mudah diskalakan, dan UI modern yang enak dilihat.
              </p>

              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Link
                  href="/register"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-xl transition-all hover:scale-105 hover:bg-primary/90"
                >
                  Mulai Bangun
                  <ArrowRight className="ml-2 size-5" />
                </Link>

                <Link
                  href="https://github.com/brynnnn12/next-auth"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-background/50 px-8 text-base font-medium backdrop-blur transition-all hover:scale-105 hover:bg-accent"
                >
                  <GitGraph className="mr-2 size-5" />
                  Lihat GitHub
                </Link>
              </div>

              {/* Stats */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="mt-20 grid gap-8 border-y border-border/50 py-10 sm:grid-cols-3"
              >
                <div>
                  <h3 className="text-4xl font-black text-primary">
                    10K+
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    Pengembang
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-primary">
                    99.9%
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    Ketersediaan
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-primary">
                    100%
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    Type-safe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section
          id="preview"
          className="relative py-24 scroll-mt-24"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div
              data-aos="zoom-in"
              className="overflow-hidden rounded-[32px] border border-border/50 bg-background/60 shadow-2xl backdrop-blur"
            >
              <div className="flex items-center gap-2 border-b border-border/50 px-6 py-4">
                <div className="size-3 rounded-full bg-red-500" />
                <div className="size-3 rounded-full bg-yellow-500" />
                <div className="size-3 rounded-full bg-green-500" />
              </div>

              <img
                src="https://placehold.co/1600x900/png"
                alt="Pratinjau Dashboard"
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="py-32 scroll-mt-24"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <h2
                data-aos="fade-up"
                className="text-4xl font-black tracking-tight md:text-5xl"
              >
                Fitur Utama
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="mt-6 text-lg leading-relaxed text-muted-foreground"
              >
                Semua yang dibutuhkan untuk membangun autentikasi modern.
              </p>
            </div>

            <div className="grid auto-rows-[24rem] gap-6 md:grid-cols-3">
              {/* Large Card */}
              <div
                data-aos="fade-up"
                className="group relative overflow-hidden rounded-[32px] border border-border/50 bg-gradient-to-br from-primary/10 to-background p-8 md:col-span-2"
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative z-10">
                  <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary/10">
                    <Lock className="size-8 text-primary" />
                  </div>

                  <h3 className="text-3xl font-black">
                    Autentikasi Aman
                  </h3>

                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                    Dibangun dengan Better Auth untuk keamanan maksimal,
                    manajemen sesi, OAuth, verifikasi email,
                    dan alur login modern.
                  </p>
                </div>
              </div>

              {/* Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="rounded-[32px] border border-border/50 bg-background/50 p-8 backdrop-blur"
              >
                <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Zap className="size-8 text-primary" />
                </div>

                <h3 className="text-2xl font-black">
                  Super Cepat
                </h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Menggunakan Next.js App Router dan dioptimalkan
                  untuk performa runtime yang cepat.
                </p>
              </div>

              {/* Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="rounded-[32px] border border-border/50 bg-background/50 p-8 backdrop-blur"
              >
                <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Database className="size-8 text-primary" />
                </div>

                <h3 className="text-2xl font-black">
                  Drizzle ORM
                </h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  ORM database yang type-safe dengan DX modern
                  dan manajemen skema yang bersih.
                </p>
              </div>

              {/* Large Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="relative overflow-hidden rounded-[32px] border border-border/50 bg-background/50 p-8 backdrop-blur md:col-span-2"
              >
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative z-10">
                  <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary/10">
                    <Palette className="size-8 text-primary" />
                  </div>

                  <h3 className="text-3xl font-black">
                    Komponen UI yang Elegan
                  </h3>

                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                    UI yang dirancang rapi dengan Tailwind CSS,
                    Shadcn UI, animasi halus, dan layout responsif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <h2
                data-aos="fade-up"
                className="text-4xl font-black md:text-5xl"
              >
                Mulai dalam Hitungan Menit
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Clone Repositori",
                  desc: "Install project pakai npm atau pnpm.",
                },
                {
                  number: "02",
                  title: "Siapkan Database",
                  desc: "Konfigurasi Drizzle ORM dan variabel environment.",
                },
                {
                  number: "03",
                  title: "Deploy",
                  desc: "Deploy ke Vercel dengan sekali klik.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="rounded-[32px] border border-border/50 bg-background/50 p-8 backdrop-blur"
                >
                  <div className="mb-8 text-6xl font-black text-primary/20">
                    {item.number}
                  </div>

                  <h3 className="text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <h2
                data-aos="fade-up"
                className="text-4xl font-black md:text-5xl"
              >
                Disukai Banyak Developer
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="relative overflow-hidden rounded-[32px] border border-border/50 bg-background/50 p-8 backdrop-blur"
                >
                  <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

                  <div className="mb-6 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <p className="leading-relaxed text-muted-foreground">
                    “Salah satu starter kit autentikasi terbaik
                    yang pernah saya pakai. Arsitektur rapi dan
                    UI-nya keren.”
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="size-12 rounded-full bg-primary/10" />

                    <div>
                      <h4 className="font-bold">
                        Dzakir Developer
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        Engineer Fullstack
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="container mx-auto px-4 md:px-8">
            <div
              data-aos="zoom-in"
              className="relative overflow-hidden rounded-[40px] border border-border/50 bg-primary px-8 py-24 text-center text-primary-foreground"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_60%)]" />

              <div className="relative z-10">
                <h2 className="text-5xl font-black leading-tight">
                  Siap Bangun
                  <br />
                  Project Berikutnya?
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
                  Bangun aplikasi modern yang skalabel
                  dengan autentikasi siap produksi mulai hari ini.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/register"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-background px-8 text-base font-bold text-foreground transition-transform hover:scale-105"
                  >
                    Mulai Sekarang
                  </Link>

                  <Link
                    href="#features"
                    className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-8 text-base font-medium transition-all hover:bg-white/10"
                  >
                    Pelajari
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="py-32 scroll-mt-24"
        >
          <div className="container mx-auto max-w-4xl px-4 md:px-8">
            <div className="mb-20 text-center">
              <h2
                data-aos="fade-up"
                className="text-4xl font-black md:text-5xl"
              >
                Pertanyaan yang Sering Ditanyakan
              </h2>
            </div>

            <div className="space-y-6">
              {[
                "Apakah ini siap dipakai untuk production?",
                "Apakah mendukung OAuth?",
                "Bisa deploy ke Vercel?",
              ].map((faq, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="rounded-3xl border border-border/50 bg-background/50 p-8 backdrop-blur"
                >
                  <h3 className="text-xl font-bold">
                    {faq}
                  </h3>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Ya. Template ini dibuat untuk kebutuhan aplikasi modern
                    dengan fokus pada skalabilitas, keamanan,
                    dan developer experience.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-primary" />

            <p className="text-sm text-muted-foreground">
              Dibuat dengan Next.js 16
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>

            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Dokumentasi
            </Link>

            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Kontak
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
