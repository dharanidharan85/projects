import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import tech from '../../assets/tech.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import music from '../../assets/music.png'
import vlogs from '../../assets/blogs.png'
import news from '../../assets/news.png'

import vjsiddhu from '../../assets/vjsiddhu.jpg'

export const Sidebar = ({sidebar}) => {
  return (
    <>
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className="side-link">
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className="side-link">
                <img src={game_icon} alt="" /><p>Gaming</p>
            </div>
            <div className="side-link">
                <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>
            <div className="side-link">
                <img src={sports} alt="" /><p>Sports</p>
            </div>
            <div className="side-link">
                <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>
            <div className="side-link">
                <img src={tech} alt="" /><p>Technology</p>
            </div>
            <div className="side-link">
                <img src={music} alt="" /><p>Music</p>
            </div>
            <div className="side-link">
                <img src={vlogs} alt="" /><p>Vlogs</p>
            </div>
            <div className="side-link">
                <img src={news} alt="" /><p>News</p>
            </div>
            <hr />
            
        </div>
        <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={vjsiddhu} alt="" /><p>VjSiddhu Vlogs</p>
                </div>
                <div className="side-link">
                    <img src={vjsiddhu} alt="" /><p>VjSiddhu Vlogs</p>
                </div>
                <div className="side-link">
                    <img src={vjsiddhu} alt="" /><p>VjSiddhu Vlogs</p>
                </div>
                <div className="side-link">
                    <img src={vjsiddhu} alt="" /><p>VjSiddhu Vlogs</p>
                </div>
                <div className="side-link">
                    <img src={vjsiddhu} alt="" /><p>VjSiddhu Vlogs</p>
                </div>
               
               
                
            </div>
    </div>
    
    </>
  )
}
