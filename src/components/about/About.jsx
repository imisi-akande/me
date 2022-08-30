import React from 'react'
import './about.css'
import ME from '../../assets/images/me-about.jpg'
import { FaAward } from 'react-icons/Fa'
import {FiUsers} from 'react-icons/Fi'
import {VscFolderLibrary} from 'react-icons/Vsc'

const about = () => {
  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className='container about__container'>
            <div className='about__me'> 
                <div className='about__me-image'>
                    <img src={ME} alt="About Image" />
                </div>
            </div>
            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h5>Experience</h5>
                        <small> 4+ Years Working</small>
                    </article>

                    <article className='about__card'>
                        <FiUsers className='about__icon'/>
                        <h5>Clients</h5>
                        <small> 5+ Worldwide</small>
                    </article>

                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon'/>
                        <h5>Projects</h5>
                        <small> 6+ Completed Projects</small>
                    </article>
                </div>
                <p>
                A bright, talented, ambitious, software developer, Machine Learning enthusiast 
                and self-motivated data analyst with a strong technical background who possesses 
                self-discipline and the ability to work with minimum supervision. Offering a solid track record of creating innovative, 
                customer-centric strategies that translate into long-lasting benefits in terms of service quality and market share. 
                Proven ability to thrive in fast-paced environments and leverage excellent communication skills to perform effective 
                sales presentations, develop and maintain positive business relationships, and liaise between various stakeholders
                to implement optimal solutions and instill a culture of excellence.
                </p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
    )
}

export default about