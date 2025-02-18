import React from 'react'
import ContactForm from './ContactForm'
import Link from 'next/link'
import { getGeneral } from '@/sanity/schemas/sanity-utils'

export default async function Footer() {
  const content = await getGeneral();
  const { instagram, copyright } = content;

  return (
    <footer className='py-12 relative'>
      <div className='flex justify-center flex-col text-center space-y-3'>
        <Link className="block" href={`https://www.instagram.com/${instagram}`} target='_blank'>Instagram</Link>
        <Link className="block" href='/about'>About</Link>
        <Link className="block" href='/work-with-me'>Work with me</Link>
        <Link className="block" href='/contact'>Contact</Link>
      </div>
      <div className='mt-10 copyright'>
        {copyright}
      </div>
    </footer>
  )
}
