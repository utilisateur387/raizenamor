'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export default function NavbarMobile() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function handleMenuBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setIsMenuVisible(true);
  }

  const handleCloseBtnClick = (event: React.MouseEvent) => {
    setIsMenuVisible(false);
  }

  return (
    <nav className='mobile flex items-center justify-end md:hidden'>
      <button 
        className='menu'
        onClick={handleMenuBtnClick}>
          Menu
      </button>

      <div className={`menu-panel ${isMenuVisible ? 'block' : 'hidden'} justify-between py-4 gt uppercase`}>
        <div className="flex items-center justify-end">
          <button 
            className='close'
            onClick={handleCloseBtnClick}>
              Close
          </button>
        </div>
        <ul className='flex items-center flex-col'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/work-with-me'>Work with me</Link></li>
          <li><Link href='/about'>About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
