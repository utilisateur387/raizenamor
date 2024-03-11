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
        {/* <div className='w-6/12'>
          <Image 
            src={headshot?.url} 
            alt={headshot?.alt}
            width={0}
            height={0}
            className='w-full'
            sizes='(max-width: 768px) 100vw, 40vw'
            />
        </div> */}
        <div className="w-6/12" style={{ 
          backgroundImage: `url(${headshot?.url}`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
          }}></div>
        <div className='w-6/12 flex items-start justify-center flex-col gap-5 section-padding'>
          <h1 className='uppercase'>{headline}</h1>
          <p>{introParagraph}</p>
          <Link href='/about' className='btn'>Learn more</Link>
        </div>
      </section>

      {/* MISSION */}
      <section className='section-padding'>
        <p className='text-center quote'>{quote}</p>
      </section>


      {/* WORK WITH ME */}
      <section className="flex">
        <div className="w-6/12 flex flex-col items-start justify-center gap-5 section-padding">
          <h2 className='uppercase'>Work with me</h2>
          <p>{workWithMe}</p>
          <Link href='/work-with-me' className='btn'>Discover my offerings</Link>
        </div>
        <div className="w-6/12" style={{ 
          backgroundImage: `url(${backgroundImage1.url}`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
          }}>
          {/* BACKGROUND IMAGE */}
          {/* <Image 
            src={backgroundImage1.url || ''} 
            alt={backgroundImage1.alt || ''} 
            width={0}
            height={0}
            className='w-full'
            sizes='100vw'
          /> */}
          --
        </div>
      </section>


      {/* TESTIMONIALS */}
      <div className="flex section-padding">
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
        sizes='100vw'
      />
      
    </main>
  )
}
