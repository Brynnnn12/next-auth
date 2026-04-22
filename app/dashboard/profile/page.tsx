"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { UserProfileMenu } from "@/components/user-profile-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { Mail, User, ShieldCheck, MapPin, CalendarDays, Edit3 } from "lucide-react"
import ProfileLoading from "./loading"

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession()

  if (isPending) {
    return <ProfileLoading />
  }

  return (
    <>
      <header className="flex h-16 shrink-0 justify-between items-center gap-2 border-b px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/dashboard">Menu Utama</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Profil</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <UserProfileMenu />
      </header>

      <div className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Profil Pengguna</h1>
          <p className="text-muted-foreground mt-1">
            Kelola detail informasi dan pengaturan akun Anda.
          </p>
        </div>

        <div className="rounded-2xl border bg-card text-card-foreground shadow-sm overflow-hidden">
          {session ? (
            <>
              {/* Banner Area */}
              <div className="h-32 md:h-48 w-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/30 relative">
                <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))] dark:bg-grid-black/10" />
              </div>

              {/* Profile Main Info */}
              <div className="relative px-6 pb-6 sm:px-10 sm:pb-10">
                <div className="-mt-16 sm:-mt-20 flex flex-col sm:flex-row sm:items-end gap-6 mb-8">
                  <Avatar className="h-32 w-32 sm:h-40 sm:w-40 border-4 border-background shadow-xl">
                    <AvatarImage src={session.user.image || ""} alt={session.user.name || "Avatar"} className="object-cover" />
                    <AvatarFallback className="text-4xl sm:text-5xl font-bold bg-primary/10 text-primary">
                      {session.user.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-1.5 mb-2 sm:mb-4">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                        {session.user.name || "Pengguna"}
                      </h2>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        Aktif
                      </span>
                    </div>
                    <p className="text-muted-foreground flex items-center gap-2 font-medium">
                      <Mail className="h-4 w-4" /> {session.user.email}
                    </p>
                  </div>

                  <div className="flex gap-3 sm:mb-4">
                    <Button className="w-full sm:w-auto shadow-sm gap-2 rounded-full">
                      <Edit3 className="size-4" /> Edit Profil
                    </Button>
                  </div>
                </div>

                <Separator className="my-8" />

                {/* Profile Details Grid */}
                <div className="grid gap-8 md:grid-cols-2">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 tracking-tight">Informasi Pribadi</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-3 rounded-lg border bg-muted/40 transition-colors hover:bg-muted/80">
                          <div className="p-2.5 rounded-md bg-background shadow-sm border">
                            <User className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Nama Lengkap</p>
                            <p className="font-semibold text-foreground">{session.user.name || "-"}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 p-3 rounded-lg border bg-muted/40 transition-colors hover:bg-muted/80">
                          <div className="p-2.5 rounded-md bg-background shadow-sm border">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Alamat Email</p>
                            <p className="font-semibold text-foreground">{session.user.email}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 tracking-tight">Aktivitas Akun</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-3 rounded-lg border bg-muted/40 transition-colors hover:bg-muted/80">
                          <div className="p-2.5 rounded-md bg-background shadow-sm border">
                            <ShieldCheck className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Peran / Hak Akses</p>
                            <p className="font-semibold text-foreground">Pengguna Standar</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 p-3 rounded-lg border bg-muted/40 transition-colors hover:bg-muted/80">
                          <div className="p-2.5 rounded-md bg-background shadow-sm border">
                            <CalendarDays className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Terdaftar Pada</p>
                            <p className="font-semibold text-foreground">
                              {session.user.createdAt 
                                ? new Date(session.user.createdAt).toLocaleDateString("id-ID", {
                                    day: 'numeric', month: 'long', year: 'numeric'
                                  })
                                : "Baru saja bergabung"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="p-12 pl-12 text-center text-muted-foreground flex flex-col items-center justify-center min-h-[400px]">
              <User className="h-12 w-12 mb-4 opacity-20" />
              <p>Tidak dapat memuat sesi pengguna.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
