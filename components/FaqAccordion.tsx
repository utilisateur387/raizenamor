import React from 'react'

export default function FaqAccordion({
  faq
}) {
  return (
    <div>
      {faq.map(entry => (
          <>
            <div key={entry._key}>
              <h3 className='question'>{entry.question}</h3>
              <p>{entry.answer}</p>
            </div>
            <hr className='my-6' />
          </>
        ))}
    </div>
  )
}
