import { Sidebar, SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import { StudioNavbar } from '../components/studio-navbar'
import { StudioSidebar } from '../components/studio-sidebar'

interface StudioLayoutProps {
  children: React.ReactNode
}

export const StudioLayout = ( { children } : StudioLayoutProps) => {
  return (
    <div>
      <SidebarProvider>
        <div className='flex min-h-screen pt-[4rem]'>
          <StudioNavbar />
          <StudioSidebar />
          <main className='flex-1 overflow-y-auto'>
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}
