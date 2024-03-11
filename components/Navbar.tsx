import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between py-4'>
      <Link href='/'>Raiz en amor</Link>
      <div>
        <Link href='/work-with-me'>Work with me</Link>
        <Link href='/about' className='ml-5'>About</Link>
      </div>
    </nav>
  )
}
