import { getHomepage } from '@/sanity/schemas/sanity-utils'
import Image from 'next/image'
import Link from 'next/link';

export default async function Home() {
  const content = await getHomepage()
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

  return (
    <main className="min-h-[90vh]">

      {/* BANNER */}

      <div className="outside">
        <div className="inside">
          <section className="home-banner flex space-x-6 w-full">
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
            <div className="w-5/12" style={{ 
              backgroundImage: `url(${headshot?.url}`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
              }}></div>

            <div className="home-banner-intro w-7/12 flex items-center justify-center flex-col section-padding px-12">
              <div className='flex gap-5 flex-col items-start'>
                <h1 className='uppercase'>{headline}</h1>
                <p>{introParagraph}</p>
                <Link href='/about' className='btn'>Learn more</Link>
              </div>
            </div>
          </section>
        </div>
      </div>


      <svg width="0" height="0">
      <defs>
        <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
          <path
            d="M 0,0.9
            L 0,0
            C 0.2,0 0.2,0.1 1,0
            L 1,0.96
            C 0.6 0.8, .35 1, 0 1
            Z"
          />
        </clipPath>
      </defs>
    </svg>

      {/* MISSION */}
      <section className='section section-padding'>
        <p className='text-center quote'>{quote}</p>
      </section>


      {/* WORK WITH ME */}
      <section className="flex section">
        <div className="w-6/12 flex flex-col items-start justify-center gap-5 section-padding">
          <h2 className='uppercase'>Work with me</h2>
          <p>{workWithMe}</p>
          <Link href='/work-with-me' className='btn'>Discover my offerings</Link>
        </div>

        {/* BACKGROUND IMAGE */}
        <div className="w-6/12" style={{ 
          backgroundImage: `url(${backgroundImage1.url}`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
          }}>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <div className="flex section-padding section">
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
