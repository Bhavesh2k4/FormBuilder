import React from 'react'
import Link from 'next/link'
import logo from "@/../public/Logo.jpg"
import Image from 'next/image'

function Logo() {
  return (
    <Link href="/">
      <div className='font-bold text-xl flex h-12 w-16 rounded-full items-center justify-center bg-gradient-to-r hover:cursor-pointer'>
        <Image src={logo} alt="Logo" className='rounded-lg'/>
      </div >
    </Link>
  )
}

export default Logo