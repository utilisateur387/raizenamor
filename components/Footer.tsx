import React from 'react'
import ContactForm from './ContactForm'
import Link from 'next/link'
import { getGeneral } from '@/sanity/schemas/sanity-utils'

export default async function Footer() {
  const content = await getGeneral();
  const { instagram, copyright } = content;

  return (
    <footer className='py-12 relative'>
      <div className='block md:flex space-y-10 md:space-y-0'>
        <div className="md:w-6/12 mb-16">
          <h3 className='mb-4'>Find me here</h3>
          <Link href={`https://www.instagram.com/${instagram}`} target='_blank'>Instagram</Link>
        </div>

        <div className="md:w-6/12">
          <h3 className='mb-4'>Get in touch</h3>
          <ContactForm/>
        </div>
      </div>
      <div className='mt-10 copyright'>
        {copyright}
      </div>
    </footer>
  )
}
