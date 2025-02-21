import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'
import { Route, Routes } from 'react-router-dom'
const App = () => {

  const [sidebar,setsidebar]=useState(true);

  return (
    <>
      <div>
      <Navbar setsidebar={setsidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>} />
        <Route path='/video/:categoryId/:VideoId' element={<Video/>} />
      </Routes>
      </div>
      </>

  )
}

export default App