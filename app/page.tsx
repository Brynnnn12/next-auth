import Link from "next/link";
import { ShieldCheck, Lock, Zap, Palette, ArrowRight, GitGraph } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">Next Auth</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#features" className="text-foreground/60 transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="#about" className="text-foreground/60 transition-colors hover:text-foreground">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden md:block"
            >
              Sign In
            </Link>
            <Link 
              href="/register" 
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 lg:py-32 xl:py-40">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <div className="mx-auto flex max-w-232 flex-col items-center gap-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <span className="flex size-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Ready to use Template
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Secure Authentication for <br className="hidden sm:inline" />
                <span className="text-primary">Next.js Applications</span>
              </h1>
              <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                A complete, production-ready authentication system built with Next.js 16, 
                Better Auth, Drizzle ORM, and Shadcn UI.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <Link 
                  href="/register" 
                  className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Start Building <ArrowRight className="ml-2 size-4" />
                </Link>
                <Link 
                  href="https://github.com/brynnnn12" 
                  target="_blank"
                  className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <GitGraph className="mr-2 size-4" /> View GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features / About Section */}
        <section id="about" className="w-full bg-muted/50 py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto flex max-w-232 flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Modern Tech Stack</h2>
              <p className="max-w-[85%] text-muted-foreground sm:text-lg">
                Everything you need to kickstart your next project with a solid authentication foundation.
              </p>
            </div>
            
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-5xl lg:grid-cols-3">
              <div className="relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Lock className="size-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Secure by Default</h3>
                <p className="text-sm text-muted-foreground">
                  Powered by Better Auth, providing robust security, session management, and credential hashing.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Zap className="size-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">
                  Built on Next.js 16 App Router and Drizzle ORM for optimal performance and pure Edge compatibility.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Palette className="size-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Beautiful UI/UX</h3>
                <p className="text-sm text-muted-foreground">
                  Styled with Tailwind CSS and Shadcn UI components for a modern, accessible interface out of the box.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 px-4 md:h-20 md:flex-row md:py-0 md:px-8 text-center md:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5 text-primary" />
            <p className="text-sm leading-loose text-muted-foreground">
              Built by <a href="https://github.com/brynnnn12" target="_blank" className="font-medium underline underline-offset-4 hover:text-primary">brynnnn12</a>.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Next Auth Template. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
