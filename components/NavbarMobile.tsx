'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useWindowSize } from "@uidotdev/usehooks";
import variables from '../styles/variables.module.scss';


export default function NavbarMobile() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const pathname = usePathname();
  const size = useWindowSize();

  useEffect(() => {
    setIsMenuVisible(false);
  }, [pathname])

  useEffect(() => {
    if (size.width && size.width > 768) {
      setIsMenuVisible(false);
    }
  }, [size])

  function handleMenuBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setIsMenuVisible(!isMenuVisible);
  }

  const handleCloseBtnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsMenuVisible(false);
  }

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMenuVisible(false);
  }

  return (
    <nav className='mobile flex items-center justify-end md:hidden'>
      <button 
        className='menu'
        style={{ 
          zIndex: 1000,
          border: `solid 1px ${!isMenuVisible ? variables.red : variables.offWhite}`,
          backgroundColor: `${!isMenuVisible ? variables.offWhite : 'rgba(0,0,0,0)'}`,
          color: `${isMenuVisible ? variables.offWhite : variables.red}`,
        }}
        onClick={handleMenuBtnClick}>
          {isMenuVisible ? 'Close' : 'Menu'}
      </button>

      <div 
        className={`menu-panel flex justify-center items-center gt uppercase overflow-hidden`}
        style={{
          top: isMenuVisible ? 0 : '-40vh',
          opacity: isMenuVisible ? 1 : 0,
        }}>
        <div 
          className="flex items-center justify-end overflow-hidden"
          style={{
            // top: isMenuVisible ? 0 : '-40vh',
            // opacity: isMenuVisible ? 1 : 0,
          }}>
          {/* <button 
            className='close'
            onClick={handleCloseBtnClick}>
              Close
          </button> */}
        </div>
        <ul className='flex items-center flex-col'>
          <li><Link href='/' onClick={handleLinkClick}>Home</Link></li>
          <li><Link href='/work-with-me' onClick={handleLinkClick}>Work with me</Link></li>
          <li><Link href='/about' onClick={handleLinkClick}>About</Link></li>
          <li><Link href='/contact' onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
