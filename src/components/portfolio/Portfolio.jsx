import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container  portfolio__container">
        {
          data.map((item, i) => (

        <article className="portfolio__item" key={i}>
          <div className="portfolio__item-image">
            <img src={item.image} alt={item.title} />
          </div>
          <h3>{item.title}</h3>
          <div className="portfolio__item-cta">
          <a className="btn" href={item.github} target="_blank">Github</a>
          <a className="btn btn-primary" href={item.demo} target="_blank">Live Demo</a>
          </div>
        </article>
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio