import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
<section id="services">
    <h5>What I offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
        <article className="service">
            <div className="service__head">
                <h3>CODING INSTRUCTOR</h3>
            </div>
            <ul className='service__list'>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Teach core tech competencies; HTML, CSS, Python, JavaScript, and SQL</p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Advise and mentor students</p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Manage classroom logistics </p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Create and update the curriculum</p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Collect data of student performance to help improve the program</p>
                </li>
            </ul>
        </article>
        {/*END OF FREELANCE*/}
        <article className="service">
            <div className="service__head">
                <h3> WEB DEVELOPMENT</h3>
            </div>
            <ul className='service__list'>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Design and create effective websites and applications</p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Building and deploying webserver-based products</p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Experience with Python frameworks: Flask & Django</p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Experience with relational database modeling and data migration</p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Experience with version control systems like Git or SVN</p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Web improvement and automation</p>
                </li>
            </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}
        <article className="service">
            <div className="service__head">
                <h3> DATA ANALYSIS</h3>
            </div>
            <ul className='service__list'>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Collect data using the scripting languages</p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Explore datasets</p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Work on Python libraries, including Matplotlib, NumPy, Pandas</p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Model data to assist reporting</p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Communicate findings with the stakeholders</p>
                </li>
            </ul>
        </article>
        {/*END OF DATA ANALYSIS*/}
    </div>
</section>
)
}

export default Services