import { getHomepage } from '@/sanity/schemas/sanity-utils'
import Image from 'next/image'
import Link from 'next/link';

export default async function Home() {
  const content = await getHomepage();  
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
    <main id="home" className="min-h-[90vh] overflow-hidden">

      {/* BANNER */}
      {/* <div className="hp-banner-outside outside">
        <div className="hp-banner-inside inside"> */}
          <section className="home-banner flex flex-col md:flex-row md:space-x-6 w-full section-padding">
            {/* BANNER TEXT */}
            <div className="home-banner-intro w-full block md:w-6/12 md:flex items-center justify-center flex-col">
              <div className='flex gap-5 flex-col items-start md:items-start'>
                <h1 className='md:text-left'>
                  {headline}
                  <img src="/icons/sun.svg" className="inline-block ml-1 -translate-y-1" alt="Sun"/>
                </h1>

                <p className='md:text-left'>{introParagraph}</p>
                <Link href='/about' className='inner-link md:text-left'>
                  <img src="/icons/arrow-right.svg" className="inline-block mr-2" alt="Arrow right"/>
                  Learn more
                </Link>
              </div>
            </div>

            {/* HEADSHOT */}
            <div className="w-full md:w-6/12 lg:w-6/12 flex items-center justify-center" >
              <Image
                src={headshot?.url || ''} 
                alt={headshot?.url || ''} 
                width={0}
                height={0}
                className='headshot-desktop w-full mix-blend-multiply'
                sizes='60vw'
                priority
              />
            </div>
            {/* <div className="sm:w-0 lg:w-1/12"></div> */}
          </section>
        {/* </div>
      </div> */}

      {/* MISSION */}
      <section className='section section-padding section-quote block md:flex'>
        <Link href='/about' className='inner-link block mb-5'>
          <img src="/icons/arrow-right.svg" className="inline-block mr-2" alt="Arrow right"/>
          About me
        </Link>
        <p className='md:text-left quote'>{quote}</p>
      </section>


      {/* WORK WITH ME */}
      <section className="block md:flex section px-8 my-10 md:my-[8em] md:space-x-5" style={{height: '-webkit-fill-available'}}>

        <div className="w-none lg:w-1/12"></div>
        <div className="container-bg-1 w-full md:w-6/12 lg:w-5/12 flex items-center justify-center">
          <Image 
            src={backgroundImage1.url || ''} 
            alt={backgroundImage1.alt || ''} 
            width={0}
            height={0}
            className='w-full'
            sizes='100vw'
            id="hp-bg-1"
          />
        </div>       

        <div className='w-full md:w-6/12 lg:w-5/12 flex items-center justify-center flex-col'>
          <div>
            <p>{workWithMe}</p>
            <Link href='/work-with-me' className='inner-link block mt-5'>
              <img src="/icons/arrow-right.svg" className="inline-block mr-2" alt="Arrow right"/>
              Work with me
            </Link>
          </div>
        </div>

        <div className="w-none lg:w-1/12"></div>
      </section>


      {/* TESTIMONIALS */}
      <section className='section-padding section testimonials'>
        <div className="flex justify-start overflow-x-scroll space-x-12">
          {testimonials.map(testimonial => (
            <div className='testimonial-card text-left inline-block' key={testimonial._key}>
              <p>{testimonial.text}</p>
              <p className='mt-6'>{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BACKGROUND IMAGE 2 */}
      <div className='container-bg2 flex items-center'>
        <Image 
          src={backgroundImage2.url || ''} 
          alt={backgroundImage2.alt || ''} 
          width={0}
          height={0}
          className='w-full'
          sizes='100vw'
        />
      </div>      
    </main>
  )
}
