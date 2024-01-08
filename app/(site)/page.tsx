import { getHomepage } from '@/sanity/schemas/sanity-utils'
import Image from 'next/image'
import Link from 'next/link';

export default async function Home() {
  const content = await getHomepage()
  console.log(content);
  const {
    headline, 
    introParagraph, 
    quote, 
    workWithMe, 
    testimonials, 
    headshot, 
    backgroundImage1, 
    backgroundImage2,
  } = content;
  console.log(testimonials);

  
  return (
    <main className="section min-h-[90vh]">

      {/* BANNER */}
      <section className="flex space-x-6">
        <div className='w-6/12'>
          <Image 
            src={headshot?.url} 
            alt={headshot?.alt}
            width={0}
            height={0}
            className='w-full'
            sizes='(max-width: 768px) 100vw, 40vw'
            />
        </div>
        <div className='w-6/12'>
          <h1>{headline}</h1>
          <p>{introParagraph}</p>
          <Link href='/about' className='btn'>Learn more</Link>
        </div>
      </section>

      {/* MISSION */}
      <section className='py-20'>
        <p className='text-center'>{quote}</p>
      </section>

      {/* BACKGROUND IMAGE */}
      <Image 
        src={backgroundImage1.url || ''} 
        alt={backgroundImage1.alt || ''} 
        width={0}
        height={0}
        className='w-full'
        sizes='(max-width: 768px) 100vw, 40vw'
      />

      {/* WORK WITH ME */}
      <section className="flex">
        <div className="w-6/12">
          <h2>Work with me</h2>
          <Link href='/work-with-me' className='btn'>Discover my offerings</Link>
        </div>
        <div className="w-6/12">
          <p>{workWithMe}</p>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <div className="flex">
        {testimonials.map(testimonial => (
          <div className='text-center' key={testimonial._key}>
            <p>{testimonial.text}</p>
            <p className='mt-2'>{testimonial.author}</p>
          </div>
        ))}
      </div>

      {/* BACKGROUND IMAGE */}
      <Image 
        src={backgroundImage2.url || ''} 
        alt={backgroundImage2.alt || ''} 
        width={0}
        height={0}
        className='w-full'
        sizes='(max-width: 768px) 100vw, 40vw'
      />
      
    </main>
  )
}
