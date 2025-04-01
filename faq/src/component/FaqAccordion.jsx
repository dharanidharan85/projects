import React from 'react'
import FaqItem from './FaqItem'

const FaqAccordion = ({data}) => {
  return (
    <div className="FaqAccordion">
        <h2>FAQs</h2>
        {data.map((value)=>(
          <FaqItem key={value.id} question={value.question} answer={value.answer} />
        ))}
        
    </div>
  )
}

export default FaqAccordion