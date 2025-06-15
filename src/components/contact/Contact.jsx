





import React from "react"
import {Back} from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3548.746438243889!2d77.96271940000003!3d27.1957051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sacademic%20education!5e0!3m2!1sen!2sin!4v1749824896675!5m2!1sen!2sin'
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={mapUrl}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
  <p>
                  Academic Education,<br />
                  Noida, Uttar Pradesh – 201301, India
                </p>            
                  </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                 <p>academic.education.help@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact