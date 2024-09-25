'use client'

import Link from 'next/link'
import React, { useState } from 'react'

// export type event = keyof GlobalEventHandlersEventMap;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    phone: '',
  })
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')
  // const [phone, setPhone] = useState('')

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e)
    e.preventDefault();

    const res = await fetch('/api/mailchimp', {
      body: JSON.stringify(formData),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, input: string) => {
    const value = e.currentTarget.value
    setFormData({...formData, [input]: value})

  //   switch (input) {
  //     case 'firstName':
  //       setFirstName(value)
  //       break
  //     case 'lastName':
  //       setLastName(value)
  //       break
  //     case 'email':
  //       setEmail(value)
  //       break
  //     case 'message':
  //       setMessage(value)
  //       break
  //     case 'phone':
  //       setPhone(value)
  //       break
  //     default :
  //       break
  //   }
  }

  return (
    <form 
      action="" 
      className='contact-form flex flex-col space-y-3'
      // onSubmit={handleSubmit}
      >
      <div className="block space-y-3 md:space-y-0 md:flex md:space-x-3">
        <div className="md:w-6/12">
          <input 
            type="text"
            name='first-name'
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
            name='last-name'
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
    </form>
  )
}
