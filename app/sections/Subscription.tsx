
import React from 'react'
import MyButton from '../componants/MyButton'
import ButtonFlexible from '../componants/ButtonFlexible'
import { SUBSCRIPTIONTexts } from '../constants'

const Subscription = () => {
  return (
    <section className='relative w-full mt-24 mx-12'>
      <ul className='flex lg:flex-row flex-col justify-around items-center w-full max-xl:px-12 gap-8'>
        <li className='text-5xl font-bold md:max-w-xl leading-relaxed'>{SUBSCRIPTIONTexts[0]}<span className='text-peachy'>{SUBSCRIPTIONTexts[1]}</span>{SUBSCRIPTIONTexts[2]}</li>
        <li className='flex justify-between items-center lg:w-2/3 xl:w-2/5 md:w-2/3 w-full border border-black rounded-full px-6 max-md:p-6'>
            <input placeholder='Subscribe@nike.com' className='border-none focus:outline-none text-gray-600' />
            <div className='hidden md:inline-block'>
            <MyButton  buttonText={SUBSCRIPTIONTexts[3]} image={''} imageAlt={''} imageWidth={0} imageHeight={0} />
            </div>
        </li>
        {/* for mobile */}
        <div className='flex justify-center items-center md:hidden min-w-full'>
            <ButtonFlexible   buttonText={SUBSCRIPTIONTexts[3]} image={''} imageAlt={''} imageWidth={0} imageHeight={0} />
            </div>
      </ul>
    </section>
  )
}

export default Subscription
