import ContactForm from '@/components/ContactForm';
import React from 'react'

export default async function Contact() {
  
  return (
    <main id="contact" className='section min-h-[90vh] overflow-hidden'>
      <div className="md:w-6/12">
        <h3 className='mb-4'>Get in touch</h3>
        <ContactForm/>
      </div>
    </main>
  )
}
