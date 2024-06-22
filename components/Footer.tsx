import React from 'react'
import ContactForm from './ContactForm'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='py-12'>
      <div className='block md:flex space-y-10 md:space-y-0'>
        <div className="md:w-6/12">
          <h2 className='mb-8'>Find me here</h2>
          <Link href='/'>Instagram</Link>
        </div>

        <div className="md:w-6/12">
          <h2 className='mb-8'>Get in touch</h2>
          <ContactForm/>
        </div>
      </div>
    </footer>
  )
}
