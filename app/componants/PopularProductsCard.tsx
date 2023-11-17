

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

type PopularProductsCardProps={
    image:string | StaticImport
    productName:string
    productPrice:number
    productRating:number
    imageAlt:string
    imageWidth:number
    imageHeight:number
  }
const PopularProductsCard = ({image,imageAlt,imageWidth,imageHeight,productName,productPrice,productRating}:PopularProductsCardProps) => {
  return (
    <div className='flex flex-col justify-center items-start gap-4 '>
      <div className="rounded-xl bg-center bg-cover bg-collectionBg cursor-pointer shoesCardOnHover"  >
        <Image src={image} alt={imageAlt} width={imageWidth} height={imageHeight}  className="object-contain rounded-none"/>
 </div>
    <div className='flex justify-center items-center gap-2'>
    <Image src={"./assets/icons/star.svg"} alt={'Rating'}  width={25} height={25} />
    <h1>({productRating})</h1>
    </div>
    <h1 className='text-2xl font-bold leading-6'>{productName}</h1>
    <h1 className='text-2xl font-bold text-peachy'>${productPrice}</h1>
    </div>
  )
}

export default PopularProductsCard
