import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Selamat datang di dashboard Anda! Di sini Anda dapat mengelola profil, melihat aktivitas terbaru, dan mengakses fitur eksklusif lainnya. Gunakan menu di sebelah kiri untuk menavigasi berbagai bagian dashboard Anda.",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
