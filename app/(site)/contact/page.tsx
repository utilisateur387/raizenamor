import ContactForm from '@/components/ContactForm';
import React from 'react'

export default async function Contact() {
  
  return (
    <section id="contact" className='section overflow-hidden md:flex space-y-10 md:space-y-0 md:space-x-12'>
      <div className="w-full md:w-7/12">
        <h1>
          Feel free to reach out through this form and I will get back to you soon!
          <img src="/icons/moon.svg" className="inline-block ml-3" alt="Moon"/>
        </h1>
      </div>
      <div className="w-full md:w-5/12">
        <ContactForm/>
      </div>
    </section>
  )
}
