
import FaqAccordion from '@/components/FaqAccordion';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { getWorkWithMePage } from '@/sanity/schemas/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import React from 'react';

export default async function WorkWithMe() {
  const content = await getWorkWithMePage()
  const {
    offerings,
    faq,
    backgroundImage1,
  } = content

  return (
    <>
      {/* BACKGROUND IMAGE */}
      <Image 
        src={backgroundImage1?.url} 
        alt={backgroundImage1?.alt} 
        width={0}
        height={0}
        className='wwm-bg-image w-full wwm-bg-1'
        sizes='100vw'
      />

      <main id='offerings' className='min-h-[90vh] mt-[6em] overflow-hidden'>

        {/* OFFERINGS */}
        <section className=''>
          {offerings.map(offering => (
            <div key={offering._key} className='offering mb-6 block md:flex space-x-0 md:space-x-4'>
              <div className='w-full md:w-6/12 mb-8 md:mb-0 flex flex-col justify-between'>
                <div>
                  <h2 className='offerings-title max-w-md mb-2'>{offering.title}</h2>
                  <h3 className='offering-duration md:mb-4'>{offering.duration}</h3>
                </div>
                
                {/* Book button desktop */}
                <div className='hidden md:block mb-4'>
                  <CalendlyEmbed url={offering.calendly} />
                </div>
              </div>
              <div className='w-full md:w-6/12'>
                <PortableText value={offering.description} />
                
                {/* Book button mobile */}
                <div className='block md:hidden mt-5'>
                  <CalendlyEmbed url={offering.calendly} />
                </div>
              </div>
            </div>
          ))}
        </section>


        {/* BACKGROUND IMAGE */}
        {/* <Image 
          src={backgroundImage2?.url} 
          alt={backgroundImage2?.alt} 
          width={0}
          height={0}
          className='w-full'
          sizes='100vw'
        /> */}

        {/* FAQ */}
        <section className='faq'>
          <div className="section-padding">
            {/* <hr className='my-6' /> */}
            <FaqAccordion faq={faq} />
          </div>
        </section>
      </main>
    </>
  )
}
