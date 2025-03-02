import { Sidebar, SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import { HomeNavbar } from '../components/home-navbar'
import { HomeSidebar } from '../components/home-sidebar'

interface HomeLayoutProps {
  children: React.ReactNode
}

export const HomeLayout = ( { children } : HomeLayoutProps) => {
  return (
    <div>
      <SidebarProvider>
        <div className='flex min-h-screen pt-[4rem]'>
          <HomeNavbar />
          <HomeSidebar />
          <main className='flex-1 overflow-y-auto'>
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}
