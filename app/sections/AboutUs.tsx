
import React from 'react'
import MyButton from '../componants/MyButton'
import Image from 'next/image'
import { AboutUsImg, AboutUsTexts } from '../constants'

const AboutUs = () => {
  return (
    <section id='AboutUs'
    className='relative flex flex-col lg:flex-row justify-start items-start mt-36 max-md:mt-16 w-full px-12'>
       <div className='flex flex-col justify-center items-start max-lg:max-lg xl:w-2/3 lg:w-5/6 gap-6 lg:gap-2 mt-16'>
          <h1 className='text-5xl font-bold md:leading-snug leading-relaxed'>{AboutUsTexts[0]}<span className='text-peachy'>{AboutUsTexts[1]}</span>{AboutUsTexts[2]}</h1>
          <p className='text-gray-500 text-xl leading-relaxed md:leading-snug'>{AboutUsTexts[3]}</p>
          <p className='text-gray-500 text-xl leading-relaxed md:leading-snug'>{AboutUsTexts[4]}</p>
          <MyButton buttonText={AboutUsTexts[5]} image={''} imageAlt={''} imageWidth={0} imageHeight={0} />
       </div>
       <div className='flex flex-col justify-center items-center w-full mt-8 xl:pl-36 lg:pl-16'>
        <Image className="object-contain "  src={AboutUsImg} alt={''} width={600} height={600}  />
       </div>
    </section>
  )
}

export default AboutUs
