
import Image from 'next/image'
import React from 'react'
import { CopyRights, Email, FooterTexts, Helps, PhoneNumber, Products, Terms_Conditon, footerLogo, socialMedias } from '../constants'

const Footer = () => {
  return (
    <section id="Footer" className='flex flex-col justify-between items-start bg-black w-full mt-24 p-8 lg:p-20'>
        <div className='flex justify-between items-start max-xl:flex-wrap w-full'>
             <div className='flex flex-col gap-8 h-full  md:max-w-md max-xl:mt-12 mr-12'>
          <Image width={160} height={160} src={footerLogo.logo} alt='footer-logo'/>
          <p className='text-gray-300 leading-tight text-lg'>{FooterTexts[0]}</p>
        <div className='flex justify-start items-center w-full gap-4'>
          {
            socialMedias.map((media,index)=>{
              return <div key={index} className='rounded-full p-2  bg-white cursor-pointer hover:bg-gray-300'>
                <Image  width={25} height={25} src={media.icon} alt={media.href} />
              </div>
            })
          }
        </div>
             </div>
             <div className='leading-1 max-xl:mt-12 mr-12'>
        <h1 className='text-white text-2xl font-semibold ' >{FooterTexts[1]}</h1>
        <ul className=' flex flex-col justify-center gap-1 items-start mt-6'>
         {Products.map((product)=>{

          return <li key={product} className='text-gray-300 text-lg hover:text-gray-400 cursor-pointer' >{product}</li>
         })}
        </ul>
            </div>
            <div className='leading-10 max-xl:mt-12 mr-12'>
                <h1 className='text-white text-2xl font-semibold ' >{FooterTexts[2]}</h1>
                <ul className=' flex flex-col justify-center gap-1 items-start mt-6'>
                {Helps.map((Help)=>{

                return <li key={Help} className='text-gray-300 text-lg hover:text-gray-400 cursor-pointer' >{Help}</li>
                })}
                </ul>
            </div>
            <div className='flex flex-col justify-between gap-20 h-full leading-1 max-xl:mt-12 mr-12'>
            <div className='flex flex-col gap-1 h-full'>
            <h1 className='text-white text-2xl font-semibold ' >{FooterTexts[3]}</h1>
            <ul className=' flex flex-col justify-center gap-2 items-start mt-6'>
            <li className='text-gray-300 text-lg hover:text-gray-400 cursor-pointer'>{Email}</li>
            <li className='text-gray-300 text-lg hover:text-gray-400 cursor-pointer'>{PhoneNumber}</li>

            </ul>        
            </div>
        
     
      </div>
        </div>

        <div className='text-gray-300 text-lg 
        flex justify-between items-center w-full mt-16 max-sm:flex-col-reverse max-sm:items-start gap-4'>
          <div className='flex justify-start items-center gap-3 '>
          <Image width={20} height={20} src={'/assets/icons/copyright-sign.svg'} alt={'copyrights'} />
          <h1 className='hover:text-gray-400 cursor-pointer'>{CopyRights}</h1> </div>
          <h1 className='hover:text-gray-400 cursor-pointer'>{Terms_Conditon}</h1>
        </div>
    </section>
  )
}

export default Footer