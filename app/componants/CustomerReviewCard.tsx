

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

type ServiceCardProps={
    reviewerImg:string | StaticImport
    reviewerDescription:string
    reviewerName:string
    reviewerRating:number
}

const CustomerReviewCard = ({reviewerImg,reviewerName,reviewerDescription,reviewerRating}:ServiceCardProps) => {
  return (
    <div className='flex flex-col justify-center items-center text-center gap-4'>
         <Image className='rounded-full object-cover' width={150} height={150} src={reviewerImg} alt={'image'} />
      <p className='text-gray-500 leading-8 text-lg lg:max-w-sm'>{reviewerDescription}</p>
      <div className='flex justify-center items-center gap-4'>
        <Image width={20} height={20} src={'/assets/icons/star.svg'} alt={'image'}/> 
        <h1 className='text-gray-500 leading-8'>({reviewerRating})</h1>
      </div>
      <h1 className='text-gray-800 leading-8 font-bold text-2xl'>{reviewerName}</h1>
    </div>
  )
}

export default CustomerReviewCard
