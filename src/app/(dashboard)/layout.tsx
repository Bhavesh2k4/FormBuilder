import Logo from '@/components/Logo'
import Theme from '@/components/Theme'
import { UserButton } from '@clerk/nextjs'
import React, { ReactNode } from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
        <nav className='flex justify-between items-center border-b border-border h-[60px] px-4 py-2'>
            <Logo />
            <div className='flex items-center gap-4'>
            <Theme />
            <UserButton afterSignOutUrl='/sign-in' />
            </div>
        </nav>
        <main className='flex w-full flex-grow'>{children}</main>
    </div>
  )
}

export default Layout