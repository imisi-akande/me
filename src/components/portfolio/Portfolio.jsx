import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/images/portfolio1.jpg"
import IMG2 from '../../assets/images/portfolio2.jpg'
import IMG3 from '../../assets/images/portfolio3.jpg'
import IMG4 from '../../assets/images/portfolio4.jpg'
import IMG5 from '../../assets/images/portfolio5.jpg'
import IMG6 from '../../assets/images/portfolio6.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Dashboard for the Visualization of trends of transport in Nigeria",
        github: "https://github.com"
    },
    {
        id: 2,
        image: IMG2,
        title: "The design and analysis of COVID-19 DATA with SQL",
        github: "https://github.com"
    },
    {
        id: 3,
        image: IMG3,
        title: "The analysis of San Francisco and Airbnb Data",
        github: "https://github.com"
    },
    {
        id: 4,
        image: IMG4,
        title: "Scraping News stories",
        github: "https://github.com"
    },
    {
        id: 5,
        image: IMG5,
        title: "Django Restful API PostIT",
        github: "https://github.com"
    },
    {
        id: 6,
        image: IMG6,
        title: "Food Price Analysis with Pandas",
        github: "https://github.com"
    }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
            {
                data.map(({id, image, title, github}) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3> {title}</h3>
                            <div className='portfolio__item-cta'>
                                <a href={github} className="btn" target='_blank'>Github</a>
                            </div>
                        </article>
                        )
                })
            }
        </div>
    </section>
  )
}

export default Portfolio
