
'use client';
import React, { useEffect, useState } from 'react'
import {  PopularProductsTexts, popularProducts } from '../constants'
import PopularProductsCard from '../componants/PopularProductsCard'

const PopularShoes = () => {
 
  return (
    <section
      id='Products'
    className='relative flex flex-col justify-start items-start mt-36 w-full px-12 pt-12'>
        <div className='flex flex-col justify-start items-start gap-12'>
            <h1 className='text-5xl font-bold'>{PopularProductsTexts[0]} <span className='text-peachy'>{PopularProductsTexts[1]}</span> {PopularProductsTexts[2]}</h1>
            <p className=' text-gray-500 lg:max-w-lg text-base'>{PopularProductsTexts[3]}</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 w-full mt-12 transition ease-in-out'>
            {
            popularProducts.map((shoe, index, array) => {
                  return <PopularProductsCard key={shoe.productName} image={shoe.imgUrl} imageAlt={shoe.imgAlt} imageWidth={400} imageHeight={400} productName={shoe.productName} productPrice={shoe.productPrice} productRating={shoe.productRating}/>
                
              })}
    
        </div>
    </section>
  )
}

export default PopularShoes
