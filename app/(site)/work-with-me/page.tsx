import { getWorkWithMePage } from '@/sanity/schemas/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function WorkWithMe() {
  const content = await getWorkWithMePage()
  const {
    offerings,
    faq,
    backgroundImage1,
    backgroundImage2,
  } = content
  console.log(content);
  
  return (
    <main className='section min-h-[90vh]'>
      {/* BACKGROUND IMAGE */}
      <Image 
        src={backgroundImage1?.url} 
        alt={backgroundImage1?.alt} 
        width={0}
        height={0}
        className='w-full'
        sizes='100vw'
      />

      {/* OFFERINGS */}
      <section>
        {offerings.map(offering => (
          <div key={offering._key} className='offering mb-6'>
            <h2>{offering.title}</h2>
            <Link href='/' className='btn'>Book</Link>
            <PortableText value={offering.description} />
          </div>
        ))}
      </section>

      {/* BACKGROUND IMAGE */}
      <Image 
        src={backgroundImage2?.url} 
        alt={backgroundImage2?.alt} 
        width={0}
        height={0}
        className='w-full'
        sizes='100vw'
      />

      {/* FAQ */}
      <section>
        <hr className='my-6' />
        {faq.map(entry => (
          <>
            <div key={entry._key}>
              <h3>{entry.question}</h3>
              <p>{entry.answer}</p>
            </div>
            <hr className='my-6' />
          </>
        ))}
      </section>
    </main>
  )
}
