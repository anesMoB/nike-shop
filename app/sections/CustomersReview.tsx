

import React from 'react'
import CustomerReviewCard from '../componants/CustomerReviewCard'
import { TESTIMONIESTexts, reviews } from '../constants'

const CustomersReview = () => {
  return (
    <section className='relative flex flex-col justify-center items-center bg-gray-100 w-full p-24 max-md:p-2 mt-24'>
      <div className="xl:max-w-2xl text-center ">
      <h1 className="text-5xl  font-bold leading-relaxed">{TESTIMONIESTexts[0]}<span className="text-peachy ">{TESTIMONIESTexts[1]}</span>{TESTIMONIESTexts[2]}</h1>
      <p className="text-xl  text-gray-400 leading-8">{TESTIMONIESTexts[3]}</p>
      </div>
      <div className='flex flex-col lg:flex-row justify-around items-center md:gap-48 gap-14 p-12 '>
        {
            reviews.map((review)=>{
               return <div key={review.reviewerName}>
                    <CustomerReviewCard reviewerImg={review.reviewerImg} reviewerDescription={review.reviewerDescription} reviewerName={review.reviewerName} reviewerRating={review.reviewerRating} />
                </div>
            })
        }
      </div>
    </section>
  )
}

export default CustomersReview
