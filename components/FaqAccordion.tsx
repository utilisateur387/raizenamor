'use client'

import React, { useState } from 'react'
import { FaqEntry } from "@/types/types";

interface Props {
  faq: FaqEntry[];
}

export default function FaqAccordion({
  faq
}: Props) {
  
  const [accordion, setAccordion] = useState(
    Object.assign({}, faq.map(() => {
      return 'none'
    }))
  ) 
  
  const handleClickQuestion = (event: any) => {    
    const index = event.target.dataset['index']
    const newAccordion = {...accordion};
    newAccordion[index] = accordion[index] == 'none' ? 'block' : 'none';
    setAccordion(newAccordion)
  } 

  return (
    <div>
      {faq.map((entry, index) => (
          <div key={entry._key}>
            <div>
              <div 
                className='flex justify-between items-center faq-entry'
                onClick={handleClickQuestion} 
                // onClick={(e => console.log(e))}
                data-index={index}
                >
                <h3 className='question' data-index={index}>{entry.question}</h3>
                <span className='icon-plus' data-index={index}>+</span>
              </div>
              <p style={{ display: accordion[index] }} className='mt-3'>{entry.answer}</p>
            </div>
            <hr className='my-6' />
          </div>
        ))}
    </div>
  )
}
