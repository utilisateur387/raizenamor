import Testimonials from '@/components/Testimonials';
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
  } = content;

  return (
    <main id="home" className="min-h-[90vh] overflow-hidden">

      {/* BANNER */}
      <section className="home-banner flex flex-col md:flex-row md:space-x-6 w-full section-padding">

        {/* BANNER TEXT */}
        <div className="home-banner-intro w-full block md:w-6/12 md:flex items-center justify-center flex-col">
          <div className='flex space-y-6 md:space-y-10 flex-col items-start md:items-start'>
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
      </section>

      {/* MISSION */}
      <section className='section section-padding section-quote block md:flex'>
        <Link href='/about' className='inner-link block mb-5'>
          <img src="/icons/arrow-right.svg" className="inline-block mr-2" alt="Arrow right"/>
          About me
        </Link>
        <p className='md:text-left quote'>
          <img src="/icons/flower-2.svg" className="inline-block mr-2 -translate-y-1" alt="Flower"/>
          {quote}
        </p>
      </section>


      {/* WORK WITH ME */}
      <section className="work-with-me block md:flex section mb-20 mt-16 md:my-10 md:my-[8em] md:space-x-10 justify-center">

        <div className="w-none lg:w-1/12"></div>
        <div className="w-full md:w-6/12 lg:w-5/12 flex items-center justify-center">
          <Image 
            src={backgroundImage1?.url || ''} 
            alt={backgroundImage1?.alt || ''} 
            width={0}
            height={0}
            sizes='100vw'
            id="hp-bg-1"
            layout="responsive"
            objectFit="cover"
            style={{
              height: 'auto'
            }}
          />
        </div>       

        <div className='w-full md:w-6/12 lg:w-5/12 flex items-center justify-center flex-col max-w-xl'>
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
      <Testimonials testimonials={testimonials} />
    </main>
  )
}
