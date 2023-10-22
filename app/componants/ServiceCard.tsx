

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

type ServiceCardProps={
    serviceIcon:string | StaticImport
    serviceTitle:string
    serviceDescription:string
}
const ServiceCard = ({serviceIcon,serviceTitle,serviceDescription}:ServiceCardProps) => {
  return (
    <div className='flex flex-col justify-center items-start gap-7 px-8 py-20'>
        <div className='bg-peachy rounded-full p-2'>
        <Image  width={25} height={25} src={serviceIcon} alt={serviceTitle}/>

        </div>
        <h1 className='text-xl font-bold'>{serviceTitle}</h1>
        <p className='text-gray-500 leading-normale'>{serviceDescription}</p>
    </div>
  )
}

export default ServiceCard