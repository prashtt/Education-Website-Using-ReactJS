import React from 'react'
import PriceCard from '../Pricing/PriceCard'
import { Title } from '../common/title/Title'

const Hprice = () => {
  return (
   <>
     <section className='hprice padding'>
               <Title subtitle='our pricing' title='pricing & packages'/>
           <div className="price container grid">
            <PriceCard/>
                     
        </div>
    </section>
   </>
  )
}

export default Hprice