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
          <section className="home-banner flex flex-col md:flex-row md:space-x-6 w-full">
            {/* BANNER TEXT */}
            <div className="home-banner-intro w-full block md:w-6/12 md:flex items-center justify-center flex-col section-padding">
              <div className='flex gap-5 flex-col items-start items-center md:items-start'>
                <h1 className='text-center md:text-left'>{headline}</h1>
                <p className='text-center md:text-left'>{introParagraph}</p>
                <Link href='/about' className='inner-link md:text-left'>Learn more</Link>
              </div>
            </div>

            {/* HEADSHOT */}
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
            <div className="sm:w-0 lg:w-1/12"></div>
          </section>
        {/* </div>
      </div> */}

      {/* MISSION */}
      <section className='section section-padding section-quote flex'>
        <Link href='/about' className='inner-link'>About me</Link>
        <p className='md:text-left quote'>{quote}</p>
      </section>


      {/* WORK WITH ME */}
      {/* <div className="top-bottom-outside outside" style={{ height: '80vh' }}> */}
        {/* <div className="top-bottom-inside inside"> */}
          <section className="flex section px-8 my-[8em]" style={{height: '-webkit-fill-available'}}>

            <div className="w-full md:w-6/12 flex items-center justify-center">
              <Image 
                src={backgroundImage1.url || ''} 
                alt={backgroundImage1.alt || ''} 
                width={0}
                height={0}
                className='w-full'
                sizes='100vw'
                style={{
                  maxWidth: "400px",
                  width: "80%",
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: "0% 10% 0% 10%",
                }}
              />
            </div>       

            <div className='w-full md:w-6/12 flex items-center justify-center flex-col'>
              <div>
                <p>{workWithMe}</p>
                <Link href='/work-with-me' className='inner-link block mt-5'>Work with me</Link>
              </div>
            </div>

          </section>
        {/* </div> */}
      {/* </div> */}


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
