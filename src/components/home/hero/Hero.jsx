import React from 'react'
import './hero.css'
import { Title } from '../../common/title/Title'



export const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="container">
        <div className="row">
          <Title subtitle='WELCOME TO ACDAEMIA' title='Best Online Education'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde voluptatem placeat corrupti ullam eum adipisci molestias perspiciatis commodi numquam cupiditate minima aperiam officia pariatur doloribus veritatis corporis ab, at tempora architecto autem quibusdam!</p>
          <div className="button">
            <button className='primary-btn'>
              GET STARTED NOW <i className="fa-solid fa-arrow-right-long"></i>
            </button>
            <button>
              VIEW COURSE <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
    <div className="marigin"></div>
        </>
  )
}




