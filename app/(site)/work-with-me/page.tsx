
import FaqAccordion from '@/components/FaqAccordion';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { getWorkWithMePage } from '@/sanity/schemas/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

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
    <main id='offerings' className='section min-h-[90vh]'>
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
          <div key={offering._key} className='offering mb-6 block md:flex'>
            <div className='w-full md:w-6/12 mb-8 md:mb-0'>
              <h2 className='offerings-title uppercase max-w-md mb-5'>{offering.title} <span className='offering-duration'>{offering.duration}</span></h2>
              {/* <Link href='/' className='btn'> */}
                <CalendlyEmbed url={offering.calendly} />
              {/* </Link> */}
            </div>
            <div className='w-full md:w-6/12'>
              <PortableText value={offering.description} />
            </div>
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
        <FaqAccordion faq={faq} />
      </section>
    </main>
  )
}
