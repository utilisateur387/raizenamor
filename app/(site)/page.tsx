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
      <div className="hp-banner-outside outside" style={{ }}>
        <div className="hp-banner-inside inside">
          <section className="home-banner flex flex-col md:flex-row md:space-x-6 w-full">

            {/* HEADSHOT */}
            <div className="sm:w-0 lg:w-1/12"></div>
            <div className="w-full md:w-6/12 lg:w-5/12 flex items-center justify-center" >
              <Image
                src={headshot?.url || ''} 
                alt={headshot?.url || ''} 
                width={0}
                height={0}
                className='headshot-desktop w-full'
                sizes='60vw'
                priority
              />
            </div>

            <div className="home-banner-intro w-full block md:w-6/12 lg:w-5/12 md:flex items-center justify-center flex-col section-padding">
              <div className='flex gap-5 flex-col items-start items-center md:items-start'>

                {/* BANNER TEXT */}
                <h1 className='uppercase text-center md:text-left'>{headline}</h1>
                <p className='text-center md:text-left'>{introParagraph}</p>
                <Link href='/about' className='btn text-center md:text-left'>Learn more</Link>
              </div>
            </div>
            <div className="sm:w-0 lg:w-1/12"></div>
          </section>
        </div>
      </div>

      {/* MISSION */}
      <section className='section section-padding'>
        <p className='text-center quote'>{quote}</p>
      </section>


      {/* WORK WITH ME */}
      <div className="top-bottom-outside outside" style={{ height: '80vh' }}>
        <div className="top-bottom-inside inside">
          <section className="flex section px-8" style={{height: '-webkit-fill-available'}}>

            <div className='w-full md:w-6/12 flex items-center justify-center flex-col'>
              <div>
                <h2 className='uppercase'>Work with me</h2>
                <p>{workWithMe}</p>
                <Link href='/work-with-me' className='btn'>Discover my offerings</Link>
              </div>
            </div>

            <div className="w-full md:w-6/12 flex items-center justify-center">
              <Image 
                src={backgroundImage1.url || ''} 
                alt={backgroundImage1.alt || ''} 
                width={0}
                height={0}
                className='w-full'
                sizes='100vw'
                style={{
                  maxWidth: "90%",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "translateX(70px)",
                  borderRadius: "42% 0% 0% 0%",
                }}
              />
            </div>

            {/* <div className="w-full md:w-6/12 flex items-center justify-center">
              <Image 
                src={backgroundImage1.url || ''} 
                alt={backgroundImage1.alt || ''} 
                width={0}
                height={0}
                className='w-full curvy-container'
                sizes='100vw'
                style={{
                  maxWidth: "90%",
                  height: 500,
                  objectFit: "cover",
                }}
              />
            </div> */}
            
            {/* <div className="w-full md:w-6/12" style={{ 
              backgroundImage: `url(${backgroundImage1.url}`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '100%',
              }}>
            </div> */}

            {/* <div className="right-outside wwm z-20">
              <div className="right-inside w-7/12 flex flex-col items-start justify-center gap-5 section-padding !pr-16 md:pr-0">
                <h2 className='uppercase'>Work with me</h2>
                <p>{workWithMe}</p>
                <Link href='/work-with-me' className='btn'>Discover my offerings</Link>
              </div>
            </div> */}

            {/* BACKGROUND IMAGE */}
            {/* <div className="w-2/12 md:w-6/12 hp-bg2" style={{ 
              backgroundImage: `url(${backgroundImage1.url}`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              position: 'absolute',
              height: '100%',
              left: '50%',
              top: -30,
              right: 0,
              }}>
            </div> */}
            
          </section>
        </div>
      </div>


      {/* TESTIMONIALS */}
      <div className='section-padding section testimonials'>
        <div className="flex justify-start overflow-x-scroll space-x-12">
          {testimonials.map(testimonial => (
            <div className='testimonial-card text-center inline-block' key={testimonial._key}>
              <p>{testimonial.text}</p>
              <p className='mt-2'>{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BACKGROUND IMAGE */}
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

      <svg width="0" height="0">
        <defs>
          <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,0
              L 1,0
              L 1,0.96
              C 0.6 0.8, .35 1, 0 1
              Z"
            />
          </clipPath>
        </defs>
      </svg>

      <svg width="0" height="0">
        <defs>
          <clipPath id="curveTopBottom" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,0.05
              C 0.3,0.05 .3,0.2 1,0
              L 1,0.96
              C 0.6 0.8, .35 1, 0 1
              Z"
            />
          </clipPath>
        </defs>
      </svg>

      <svg width="0" height="0">
        <defs>
          <clipPath id="curveRight" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,0
              L 1,0
              C 1,0.5 0.9,0.9 0.9,1
              L 0 1
              Z"
            />
          </clipPath>
        </defs>
      </svg>
      
    </main>
  )
}
