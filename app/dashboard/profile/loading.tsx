import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function ProfileLoading() {
  return (
    <>
      <header className="flex h-16 shrink-0 justify-between items-center gap-2 border-b px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" disabled />
          <Separator orientation="vertical" className="mr-2 h-4" />
          
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-20 hidden md:block" />
            <Skeleton className="h-4 w-4 hidden md:block" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
        
        <Skeleton className="h-8 w-8 rounded-full" />
      </header>

      <div className="flex max-w-3xl flex-col gap-6 p-6">
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>

        <div className="rounded-xl border bg-card p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            {/* Avatar Skeleton */}
            <Skeleton className="h-24 w-24 rounded-full" />
            
            {/* Detail Skeletons */}
            <div className="space-y-6 flex-1 w-full">
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-6 w-48" />
              </div>
              
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-64" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
