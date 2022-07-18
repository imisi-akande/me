import React from 'react'
import './header.css'
import ME from '../../assets/images/myimage1.png'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className=".container.header__container">
            <h5>Hello I'm</h5>
            <h1>Imisioluwa AKANDE</h1>
            <h5 className="text-light">Software Developer</h5>
            <CTA />
            <HeaderSocial/>
            <div className="me">
                <img src={ME} alt="me"/>
            </div>
            <div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </div>
    </header>
  )
}

export default Header