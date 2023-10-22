

import React from 'react'
import { ServicesContent } from '../constants'
import ServiceCard from '../componants/ServiceCard'
const Services = () => {
  return (
    <section className='relative flex flex-wrap justify-start w-full gap-9 px-12 mt-20 '>
        {ServicesContent.map((service)=>{
            return (
                <div key={service.serviceTitle} className='shadow-xl rounded-xl lg:w-[30%]  xl-w-[30%] md:w-full' >
                    <ServiceCard serviceIcon={service.serviceIcon} serviceTitle={service.serviceTitle} serviceDescription={service.serviceDescription} />
                </div>
            )
        })}
    </section>
  )
}

export default Services