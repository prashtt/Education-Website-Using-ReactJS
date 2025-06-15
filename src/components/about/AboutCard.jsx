// import React from 'react'
// import { Title } from '../common/title/Title'
// const homeAbout = [
//   {
//     id: 1,
//     cover: "https://img.icons8.com/dotty/80/000000/storytelling.png",
//     title: "Online Courses",
//     desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//   },
//   {
//     id: 1,
//     cover: "https://img.icons8.com/ios/80/000000/diploma.png",
//     title: "Earn A Certificates",
//     desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//   },
//   {
//     id: 1,
//     cover: "https://img.icons8.com/ios/80/000000/athlete.png",
//     title: "Learn with Expert",
//     desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//   },
// ]

// export const AboutCard = () => {
//   return (
//     <>
//     <section className="aboutHome">
//         <div className="container flexSB">
//             <div className="left row">
//                 <img src="/assets/about.webp" alt="" />
//             </div>
//    <div className="right row"> 
//     <Title subtitle='LEARN ANYTHING' title="Benefits About Online Learing Expertise"/>
//     <div className="items">
//         {homeAbout.map((val) =>(
//             <div className="items flexSb">
//                 <div className="img">
//                     <img src="{val.cover}" alt="" />
//                 </div>
//             </div>
//         ))}
//     </div>
//    </div>
//         </div>
//     </section>
    
//     </>
       
//   )
// }
// export default AboutCard




import React from 'react'
import { Title } from '../common/title/Title'
import { AWrapper } from './AWrapper'
import './about.css'

const homeAbout = [
  {
    id: 1,
    cover: "https://img.icons8.com/dotty/80/000000/storytelling.png",
    title: "Online Courses",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 1,
    cover: "https://img.icons8.com/ios/80/000000/diploma.png",
    title: "Earn A Certificates",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 1,
    cover: "https://img.icons8.com/ios/80/000000/athlete.png",
    title: "Learn with Expert",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
]

export const AboutCard = () => {
  return (
     <>    
    <section className="aboutHome">
      <div className="container flexSB">
        <div className="left row">
          <img src="/assets/about.webp" alt="" />
        </div>
        <div className="right row">
          <Title subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise" />
          <div className="items">
            {homeAbout.map((val, i) => (
              <div className="item flexSB" key={i}>
                <div className="img">
                  <img src={val.cover} alt={val.title} />
                </div>
                <div className="text">
                  <h2>{val.title}</h2>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <AWrapper/>
  </>
  )
}

export default AboutCard;







