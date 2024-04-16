'use client'

import React, { useState } from 'react'

export default function FaqAccordion({
  faq
}) {
  
  const [accordion, setAccordion] = useState(
    Object.assign({}, faq.map(() => {
      return 'none'
    }))
  ) 
  console.log(accordion);
  
  const handleClickQuestion = (e) => {
    console.log(e)
    const index = e.target.dataset['index']
    const newAccordion = {...accordion};
    newAccordion[index] = accordion[index] == 'none' ? 'block' : 'none';
    setAccordion(newAccordion)
    console.log(accordion);
  } 

  return (
    <div>
      {faq.map((entry, index) => (
          <div key={entry._key}>
            <div>
              <div 
                className='flex justify-between items-center faq-entry'
                onClick={handleClickQuestion} 
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
