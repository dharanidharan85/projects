import React from 'react'
import "./Footer.css/"
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                <img src={assets.logo } alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quibusdam quidem molestias nesciunt soluta. Velit nostrum eum recusandae voluptatum molestiae, rem provident ab est fugiat excepturi, sint ratione. Culpa architecto praesentium quibusdam nihil magni ut reiciendis tenetur officiis commodi distinctio incidunt quae laboriosam quis ducimus consectetur, amet id nulla asperiores.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-9345827685</li>
                        <li>dharanidharansakthivel85@gmail.com</li>
                    </ul>

                </div>
            </div>
            <hr />
            

            <p className="footer-copyright">Copyright 2025 © dharanidharansakthivel85@gmail.com - All Right Reserved</p>
        </div>
    )
}

export default Footer