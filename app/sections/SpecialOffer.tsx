
import React from 'react'
import MyButton from '../componants/MyButton'
import Image from 'next/image'
import RoundedButton from '../componants/RoundedButton'
import { SpecialOfferImg,ArrowRight, SpecialOfferTexts } from '../constants'

const SpecialOffer = () => {
  return (
    <section id='SpecialOffer'
    className='relative flex flex-col-reverse lg:flex-row justify-start items-start mt-36 max-md:mt-16 w-full  px-12'>
       <div className='flex flex-col justify-start items-start w-full mt-8 xl:pr-28 lg:pr-16 '>
        <Image className="object-contain "  src={SpecialOfferImg} alt={''} width={800} height={800}  />
       </div>
       <div className='flex flex-col justify-center items-start lg:w-5/6 gap-6 lg:gap-12 mt-16 '>
          <h1 className='text-5xl font-bold md:leading-snug leading-relaxed'><span className='text-peachy'>{SpecialOfferTexts[0]}</span>{SpecialOfferTexts[1]}</h1>
          <p className='text-gray-500 text-xl leading-relaxed md:leading-snug'>{SpecialOfferTexts[2]}</p>
          <p className='text-gray-500 text-xl leading-relaxed md:leading-snug'>{SpecialOfferTexts[3]}</p>
          <div className='flex gap-8'>
          <MyButton buttonText={SpecialOfferTexts[4]} image={ArrowRight} imageAlt={'arrowRight'} imageWidth={0} imageHeight={0} />
          <RoundedButton buttonText={SpecialOfferTexts[5]} image={''} imageAlt={''} imageWidth={0} imageHeight={0} />
          </div>
       </div>
       
    </section>
  )
}

export default SpecialOffer
