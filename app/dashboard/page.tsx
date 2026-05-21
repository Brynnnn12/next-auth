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


export default function Page() {
  return (
    <>
      <header className="flex h-16 shrink-0 justify-between items-center gap-2 border-b px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Menu Utama</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <UserProfileMenu />
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="rounded-xl border bg-card p-5 text-card-foreground">
          <h2 className="text-xl font-bold tracking-tight md:text-2xl">Selamat datang di Dashboard</h2>
          <p className="mt-1 text-sm text-muted-foreground md:text-base">
            Kelola akun, pantau aktivitas, dan akses fitur utama template autentikasi Next.js.
          </p>
        </div>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  )
}
