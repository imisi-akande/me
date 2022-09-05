import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/Fa'
import {MdFacebook} from 'react-icons/Md'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/imisioluwa-akande-39030b70/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/imisi-akande" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/akande.imisioluwaezekiel" target="_blank"><MdFacebook/></a>
    </div>
  )
}

export default HeaderSocials