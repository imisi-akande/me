import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/Fa'
import {MdFacebook} from 'react-icons/Md'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedln.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://facebook.com" target="_blank"><MdFacebook/></a>
    </div>
  )
}

export default HeaderSocials