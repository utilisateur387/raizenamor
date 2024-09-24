import { getAboutPage } from '@/sanity/schemas/sanity-utils'
import { PortableText } from '@portabletext/react'
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
    <main className='section min-h-[90vh]'>
      <section className="block md:flex">
        <div className="md:w-6/12 section-padding flex flex-col items-start gap-5 !py-40">
          <h1 className='uppercase'>{headline}</h1>
          <PortableText value={content} />
          <Link href={'/work-with-me'} className='btn'>Discover my offerings</Link>
        </div>
        <div className="md:w-6/12"
          style={{
            backgroundImage: `url(${portrait.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
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
                return <li>{certification.title}</li>
              })}
            </ul>
          </div>
          <div className="w-0 md:w-1/12"></div>
        </div>
      </section>
    </main>
  )
}
