import ContactForm from '@/components/ContactForm';
import React from 'react'

export default async function Contact() {
  
  return (
    <section id="contact" className='section min-h-[90vh] overflow-hidden flex'>
      <div className="md:w-6/12">
        <h1>Feel free to reach out through this form and I will get back to you asap!</h1>
      </div>
      <div className="md:w-6/12">
        <ContactForm/>
      </div>
    </section>
  )
}
