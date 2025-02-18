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
        <div className="section-padding flex flex-col items-start justify-center gap-5 md:!pb-10 md:!pt-28 mb-16">
          <h1 className='mb-5'>
            {headline}
            <img src="/icons/heart.svg" className="inline-block ml-3 md:scale-125" alt="Heart"/>
          </h1>
          <PortableText value={content} />
          <Link href={'/work-with-me'} className='inner-link'>
            <img src="/icons/arrow-right.svg" className="inline-block mr-2" alt="Arrow right"/>
            Work with me
          </Link>
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
              className='w-full mix-blend-multiply'
              sizes='50vw'
              priority
            />
        </div>
      </section>

      <section className='section-padding certifications relative'>
        <h2 className='text-center uppercase mb-8'>Certifications</h2>

        <div className="md:flex gap-12">
          <div className="hidden lg:block md:w-1/12"></div>
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
          <div className="hidden lg:block md:w-1/12"></div>
        </div>
      </section>
    </main>
  )
}
