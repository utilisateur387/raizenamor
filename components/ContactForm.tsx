'use client'

import Link from 'next/link'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

// export type event = keyof GlobalEventHandlersEventMap;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    phone: '',
  })
  const [result, setResult] = useState('')
  const form = useRef();
  const resMessage = useRef();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();   

    emailjs
    .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID
      , process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          phone: '',
        })
        setResult('Your message has been sent!')
      },
      (error) => {
        console.log('FAILED...', error.text);
        console.log(error);
        setResult('There was an error, please email raizenamor44 (at) gmail.com')
      },
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, input: string) => {
    const value = e.currentTarget.value
    setFormData({...formData, [input]: value})
  }

  return (
    <form 
      action="" 
      className='contact-form flex flex-col space-y-3'
      onSubmit={handleSubmit}
      ref={form}
      >
      <div className="block space-y-3 md:space-y-0 md:flex md:space-x-3">
        <div className="md:w-6/12">
          <input 
            type="text"
            name='firstname'
            placeholder='First name'
            className='w-full py-2'
            value={formData.firstName}
            required
            onChange={e => handleChange(e, "firstName")}
          />
        </div>
        <div className="md:w-6/12">
          <input 
            type="text"
            name='lastname'
            placeholder='Last name'
            className='w-full py-2'
            value={formData.lastName}
            onChange={e => handleChange(e, "lastName")}
          />
        </div>
      </div>

      <div className="block space-y-3 md:space-y-0 md:flex md:space-x-3">
        <div className="md:w-6/12">
          <input 
            type="text"
            name='email'
            placeholder='Email'
            className='w-full py-2'
            value={formData.email}
            required
            onChange={e => handleChange(e, "email")}
          />
        </div>
        <div className="md:w-6/12">
          <input 
            type="text"
            name='phone'
            placeholder='Phone number'
            className='w-full py-2'
            value={formData.phone}
            onChange={e => handleChange(e, "phone")}
          />
        </div>
      </div>
      <textarea 
        name='message'
        placeholder='Message'
        className='w-full py-2'
        value={formData.message}
        required
        onChange={e => handleChange(e, "message")}
      />
      <input 
        type="submit" 
        value="Send" 
        className='btn'/>
      <div ref={resMessage}>{result}</div>
    </form>
  )
}
