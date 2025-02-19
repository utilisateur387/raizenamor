'use client'

import { Testimonial } from '@/types/types';
import React, { useState } from 'react'

interface Props {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: Props) {
  const [inView, setInView] = useState(1);

  const showPreviousQuote = () => {
    setInView(inView !== 0 ? (inView - 1) : testimonials.length - 1);
  };

  const showNextQuote = () => {
    setInView((inView === testimonials.length - 1) ? 0 : inView + 1);
  };

  return (
    <section className='section-padding section testimonials'>
        <h3 className='h3-title'>Testimonials</h3>

        <div className="flex justify-between w-full md:space-x-12">
          <div className="w-1/12 flex flex-col justify-center items-center" onClick={showPreviousQuote}>
            <h2 className='testimonial-count'>{inView + 1}/{testimonials.length}</h2>
            
            <img src="/icons/arrow-left.svg" className="inline-block cursor-pointer" alt="Arrow left"/>
          </div>

          <div className="w-8/12">
              <div className='testimonial-card inline-block' key={testimonials[inView]._key}>
                <p>“{testimonials[inView].text}”</p>
                <p className='author mt-6'>— {testimonials[inView].author}</p>
              </div>
          </div>
          
          <div className="w-1/12 flex justify-center items-center" onClick={showNextQuote}>
            <img src="/icons/arrow-right.svg" className="inline-block cursor-pointer" alt="Arrow right"/>
          </div>
        </div>
      </section>
  )
}
