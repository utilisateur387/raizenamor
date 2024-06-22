import React from 'react'
import ContactForm from './ContactForm'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='py-12'>
      <div className='flex'>
        <div className="w-6/12">
          <h2 className='mb-5'>Find me here</h2>
          <Link href='/'>Instagram</Link>
        </div>

        <div className="w-6/12">
          <h2 className='mb-5'>Get in touch</h2>
          <ContactForm/>
        </div>
      </div>
    </footer>
  )
}
