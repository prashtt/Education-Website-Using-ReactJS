import React from 'react'
import { Title } from '../common/title/Title'
import { coursesCard } from '../../dummydata'
import OnlineCourses from '../allcourses/OnlineCourses'

const HAbout = () => {
  return (
    <>
    <section className='homeAbout'>
        <div className="container grid5">
              <Title subtitle='our courses' title="explore our popular online courses" />
             <div className='coursesCard'>
                    <div className="grid2">
                      {coursesCard.slice(0, 3).map((val) => {
                         return (
                          <div className="items">
                            <div className="content flex">
                              <div className="left">
                                <div className="img">
                                  <img src={val.cover} alt="" />
                                </div>
                              </div>
                              <div className="text">
                                <h1>{val.coursesName}</h1>
                                <div className="rate">
                                  <i className='fa fa-star'></i>
                                  <i className='fa fa-star'></i>
                                  <i className='fa fa-star'></i>
                                  <i className='fa fa-star'></i>
                                  <i className='fa fa-star'></i>
                                  <label htmlFor="">(0.5)</label>
                                </div>
                                <div className="details">
                                  {val.courTeacher.map((details) =>(
                                    <>
                                    <div className="box">
                                      <div className="dimg">
                                        <img src={details.dcover} alt="" />
                                      </div>
                                      <div className="para">
                                        <h4>{details.name}</h4>
                                      </div>
                                    </div>
                                    <span>{details.totalTime}</span>
                                      </>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="price">
                              <h3>{val.priceAll} / {val.pricePer}</h3>
                            </div>
                            <button className='outline-btn'>ENROLL NOW !</button>
                          </div>
                         )
                      })}
                    </div>
                  </div>
        </div>
    </section>
    <OnlineCourses/>
    </>
  )
}

export default HAbout