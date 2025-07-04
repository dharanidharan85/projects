import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from "../../assets/logo.png"
import search from "../../assets/search.png"
import upload from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification from '../../assets/notification.png'
import profile_icon from '../../assets/Dharani.jpg'

const Navbar = ({setsidebar}) => {
  return (
    <>
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' onClick={()=>setsidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
            <img className='logo' src={logo} alt="" />
        </div>
        <div className='nav-middle flex-div'>
          <div className="search-box flex-div">
          <input type="text" placeholder='Search' />
          
          <img src={search} alt="" />
          </div>
            
        </div>
        <div className="nav-right flex-div">
            <img src={upload} alt="" />
            <img src={more_icon} alt="" />
            <img src={notification} alt="" />
            <img src={profile_icon} className="user-icon" alt="" />
        </div>
    </nav>
    </>
  )
}

export default Navbar