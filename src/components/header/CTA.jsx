import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div classname="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href ="#contact">Let's Talk </a>
    </div>    
  )
}

export default CTA