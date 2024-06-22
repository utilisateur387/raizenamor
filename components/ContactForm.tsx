'use client'

import Link from 'next/link'
import React, { useState } from 'react'

// export type event = keyof GlobalEventHandlersEventMap;

export default function ContactForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')

  const handleChange = (e: event, input: string) => {
    const value = e.target.value

    switch (input) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'message':
        setMessage(value)
        break
      case 'phone':
        setPhone(value)
        break
      default :
        break
    }
  }

  return (
    <form action="" className='contact-form flex flex-col space-y-3'>
      <div className="block space-y-3 md:space-y-0 md:flex md:space-x-3">
        <div className="md:w-6/12">
          <input 
            type="text"
            name='first-name'
            placeholder='First name'
            className='w-full rounded-md p-2'
            value={firstName}
            required
            onChange={e => handleChange(e, "firstName")}
          />
        </div>
        <div className="md:w-6/12">
          <input 
            type="text"
            name='last-name'
            placeholder='Last name'
            className='w-full  rounded-md p-2'
            value={lastName}
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
            className='w-full  rounded-md p-2'
            value={email}
            required
            onChange={e => handleChange(e, "email")}
          />
        </div>
        <div className="md:w-6/12">
          <input 
            type="text"
            name='phone'
            placeholder='Phone number'
            className='w-full  rounded-md p-2'
            value={phone}
            onChange={e => handleChange(e, "phone")}
          />
        </div>
      </div>
      <textarea 
        name='message'
        placeholder='Message'
        className='w-full  rounded-md p-2'
        value={message}
        required
        onChange={e => handleChange(e, "message")}
      />
      <input type="submit" value="Send" />
    </form>
  )
}
