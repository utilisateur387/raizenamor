'use client'

import React, { useState } from 'react'
import { FaqEntry } from "@/types/types";
import PlusIcon from '../public/icons/plus.svg';

interface Props {
  faq: FaqEntry[];
}

interface AccordionState {
  [key: string]: string
}

export default function FaqAccordion({
  faq
}: Props) {
  
  const [accordion, setAccordion] = useState(
    Object.assign({}, faq.map(() => {
      return 'none'
    }))
  )   
  
  const handleClickQuestion = (event: React.MouseEvent<HTMLDivElement>) => {        
    const index = event.currentTarget.dataset['index']; 
    if (!index) return;   
    let newAccordion: AccordionState = {};
    Object.keys(accordion).forEach((key) => {
      if (key == index && accordion[index] == 'block') {
        newAccordion[key] = 'none';
      } else {
        newAccordion[key] = (key == index) ? 'block' : 'none';
      }
    });
    setAccordion(newAccordion)
  } 

  return (
    <div>
      {faq.map((entry, index) => (
          <div key={entry._key} onClick={handleClickQuestion} data-index={index}>
            <div>
              <div 
                className='flex justify-between items-center faq-entry'
                >
                <h3 className='question' data-index={index}>{entry.question}</h3>
                {accordion[index] == 'none' &&
                  // <span className='icon-plus' data-index={index}>+</span>
                  <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7305 1V31M28.4605 16H1.00044" stroke="#C8523C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                }
                {accordion[index] == 'block' &&
                  <svg width="30" height="2" viewBox="0 0 30 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.4605 0.999999H1.00044" stroke="#C8523C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                  
                }
              </div>
              <p style={{ display: accordion[index] }} className='faq-answer mt-3'>{entry.answer}</p>
            </div>

            {/* Add line between entries except last */}
            { (index < faq.length - 1) && 
              <hr className='my-6' /> }
          </div>
        ))}
    </div>
  )
}
