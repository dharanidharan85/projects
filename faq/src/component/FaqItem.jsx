import React, { useState } from 'react'

const FaqItem = ({question,answer}) => {
      const[show,setShow]=useState(false);

      const toggleShow =()=>{
        setShow(!show);
      }

  return (
    <div className={`faq-item ${show ? "active" :""}`}>
        <div className="faq-item-header" onClick={toggleShow} >{question}</div>
        <div className="faq-item-body">
            <div className="faq-item-body-content">{answer}</div>
        </div>
    </div>
  )
}

export default FaqItem