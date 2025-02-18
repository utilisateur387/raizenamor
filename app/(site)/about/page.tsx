import { getAboutPage } from '@/sanity/schemas/sanity-utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function About() {
  const contentAbout = await getAboutPage()
  const {
    headline,
    content,
    portrait,
    certificationText,
    certifications
  } = contentAbout;
  
  return (
    <main id="about" className='section min-h-[90vh] overflow-hidden'>
      <section className="about-banner block md:flex">
        <div className="section-padding flex flex-col items-start justify-center gap-5 md:!py-40">
          <h1>{headline}</h1>
          <PortableText value={content} />
          <Link href={'/work-with-me'} className='btn'>Discover my offerings</Link>
        </div>
        <div className="about-banner-image flex items-start justify-center"
          // style={{
          //   backgroundImage: `url(${portrait.url})`,
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          // }}
          >
            <Image
              src={portrait.url}
              width={0}
              height={0}
              alt={portrait.alt}
              className='w-full'
              sizes='50vw'
              priority
            />
        </div>
      </section>

      <section className='section-padding certifications relative'>
        <h2 className='text-center uppercase mb-8'>Certifications</h2>

        <div className="md:flex gap-12">
          <div className="w-0 md:w-1/12"></div>
          <div className="w-full md:w-5/12 mb-8 md:mb-0">
            <PortableText value={certificationText} />
          </div>
          <div className="w-full md:w-5/12">
            <ul className='certification-list'>
              {certifications.map(certification => {
                return <li key={certification.title}>{certification.title}</li>
              })}
            </ul>
          </div>
          <div className="w-0 md:w-1/12"></div>
        </div>
      </section>
    </main>
  )
}
