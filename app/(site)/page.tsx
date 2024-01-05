import { getHomepage } from '@/sanity/schemas/sanity-utils'
import Image from 'next/image'
import Link from 'next/link';

export default async function Home() {
  const content = await getHomepage()
  console.log(content);
  const {
    headline, introParagraph, quote, workWithMe, testimonials
  } = content;
  console.log(testimonials);

  
  return (
    <main className="section min-h-[90vh]">
      <h1>{headline}</h1>
      <p>{introParagraph}</p>
      <Link href='/about' className='btn'>Learn more</Link>

      <p>{quote}</p>

      <h2>Work with me</h2>
      <p>{workWithMe}</p>
      <Link href='/work-with-me' className='btn'>Discover my offerings</Link>


      {/* TESTIMONIALS */}
      <div className="flex">
        {testimonials.map(testimonial => (
          <div className='text-center' key={testimonial._key}>
            <p>{testimonial.text}</p>
            <p className='mt-2'>{testimonial.author}</p>
          </div>
        ))}
      </div>
      
    </main>
  )
}
