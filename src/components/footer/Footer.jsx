import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/Fa'
import { FiInstagram } from 'react-icons/Fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer> 
        <a href="#" className='footer__logo'>IMISIOLUWA</a>
        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className='footer__socials'>
            <a href = "https://www.facebook.com/akande.imisioluwaezekiel"><FaFacebookF/></a>
            <a href="https://www.instagram.com/akandeimisioluwa/"><FiInstagram/></a>
            <a href="https://twitter.com/imizezek"><IoLogoTwitter/></a>
        </div>
        <div className='footer__copyright'>
            <small>&copy; Imisioluwa</small>
        </div>
    </footer>
  )
}

export default Footer