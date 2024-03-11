import { getAboutPage } from '@/sanity/schemas/sanity-utils'
import { PortableText } from '@portabletext/react'
import Link from 'next/link';
import React from 'react'

export default async function About() {
  const contentAbout = await getAboutPage()
  console.log(contentAbout);
  
  return (
    <main className='section min-h-[90vh]'>
      <section className="flex">
        <div className="w-6/12 section-padding flex flex-col items-start gap-5">
          <h1>{contentAbout.headline}</h1>
          <PortableText value={contentAbout.content} />
          <Link href={'/work-with-me'} className='btn'>Discover my offerings</Link>
        </div>
        <div className="w-6/12"
          style={{
            backgroundImage: `url(${contentAbout.portrait.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
        </div>
      </section>

      <section className='section-padding'>
          <h2 className='text-center uppercase'>Certifications</h2>
      </section>
    </main>
  )
}
