import React from 'react'
import FaqAccordion from './component/FaqAccordion'
import "./App.css"


const App = () => {
  const data=[{id:1,question:"What is React",answer:"React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications "},
    {id:2,question:"What is JSX?",answer:"JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( )."},
    {id:3,question:"What is useState() in React?",answer:"The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling."},
    {id:4,question:"What are props in React?",answer:"The props in React are the inputs to a component of React. They can be single-valued or objects having a set of values that will be passed to components of React during creation by using a naming convention that almost looks similar to HTML-tag attributes. We can say that props are the data passed from a parent component into a child component."},
    {id:5,question:"What is the use of useEffect React Hooks?",answer:"The useEffect React Hook is used for performing the side effects in functional components. With the help of useEffect, you will inform React that your component requires something to be done after rendering the component or after a state change."}
  
  ]
  
    return (
    <div>
      <FaqAccordion data={data}/> 
    </div>
  )
}

export default App