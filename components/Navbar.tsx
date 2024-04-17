import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between py-4 gt uppercase'>
      <Link href='/' className='gt uppercase'>Raiz<br/>en amor</Link>
      <div className='flex items-center'>
        <Link href='/work-with-me'>Work with me</Link>
        <Link href='/about' className='ml-5'>About</Link>
      </div>
    </nav>
  )
}
