import { Testimonial } from '@/types/types';
import React from 'react'

interface Props {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: Props) {
  return (
    <section className='section-padding section testimonials'>
        <h3 className='h3-title'>Testimonials</h3>

        <div className="flex justify-start overflow-x-scroll space-x-12">
          {testimonials.map(testimonial => (
            <div className='testimonial-card text-left inline-block' key={testimonial._key}>
              <p>{testimonial.text}</p>
              <p className='mt-6'>{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>
  )
}
