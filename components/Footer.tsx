import React from 'react'
import ContactForm from './ContactForm'
import Link from 'next/link'
import { getGeneral } from '@/sanity/schemas/sanity-utils'

export default async function Footer() {
  const content = await getGeneral();
  const { instagram, copyright } = content;

  return (
    <footer className='py-12 relative'>
      <div className='flex justify-cente items-center flex-col text-center space-y-3 pb-12'>
        <Link href={`https://www.instagram.com/${instagram}`} target='_blank'>Instagram</Link>
        <Link href='/about'>About</Link>
        <Link href='/work-with-me'>Work with me</Link>
        <Link href='/contact'>Contact</Link>
      </div>
      <div className='copyright'>
        {copyright}
      </div>

      <img src="/icons/flower.svg" className="flower" alt="Arrow right"/>
    </footer>
  )
}
