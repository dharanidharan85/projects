import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import Loginpopup from './components/Loginpopup/Loginpopup'

function App() {
  
    const[showlogin,setshowlogin]=useState(false)

  return (
    <>
    {showlogin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}
      <div className="App">
        <Navbar setshowlogin={setshowlogin} /> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={< Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
