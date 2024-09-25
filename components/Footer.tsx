import React from 'react'
import ContactForm from './ContactForm'
import Link from 'next/link'
import { getGeneral } from '@/sanity/schemas/sanity-utils'

export default async function Footer() {
  const content = await getGeneral();
  const { instagram } = content;

  return (
    <footer className='py-12 relative'>
      <div className='block md:flex space-y-10 md:space-y-0'>
        <div className="md:w-6/12">
          <h2 className='mb-8'>Find me here</h2>
          <Link href={`https://www.instagram.com/${instagram}`} target='_blank'>Instagram</Link>
        </div>

        <div className="md:w-6/12">
          <h2 className='mb-8'>Get in touch</h2>
          <ContactForm/>
        </div>
      </div>
    </footer>
  )
}
