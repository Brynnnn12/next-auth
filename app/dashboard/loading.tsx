import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function DashboardLoading() {
  return (
    <>
      <header className="flex h-16 shrink-0 justify-between items-center gap-2 border-b px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" disabled />
          <Separator orientation="vertical" className="mr-2 h-4" />
          
          {/* Breadcrumb Skeleton */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-20 hidden md:block" />
            <Skeleton className="h-4 w-4 hidden md:block" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        
        {/* User Profile Menu Skeleton */}
        <Skeleton className="h-8 w-8 rounded-full" />
      </header>
      
      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Grid cards skeleton */}
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Skeleton className="aspect-video rounded-xl" />
          <Skeleton className="aspect-video rounded-xl" />
          <Skeleton className="aspect-video rounded-xl" />
        </div>
        
        {/* Main content area skeleton */}
        <Skeleton className="min-h-screen flex-1 rounded-xl md:min-h-min" />
      </div>
    </>
  )
}
