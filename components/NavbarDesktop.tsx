import Link from 'next/link'
import React from 'react'

export default function NavbarDesktop() {
  return (
    <div className='hidden md:block'>
      <nav className='desktop'>
        <div className="navInside">
          <div className='nav-content flex justify-between py-4 pt-6'>
            <Link href='/'>Raiz en amor</Link>
            <div className='flex items-center'>
              <Link href='/work-with-me'>Work with me</Link>
              <Link href='/about' className='ml-5'>About</Link>
            </div>
          </div>
        </div>
      </nav>

      <svg width="0" height="0">
        <defs>
          <clipPath id="navCurve" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,0
              L 1,0
              L 1,0.9
              C 0.7,1, .35,0.3, 0,1
              Z"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
