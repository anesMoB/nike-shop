

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

type MyButtonProps={
  buttonText:string 
  image:string | StaticImport
  imageAlt:string
  imageWidth:number
  imageHeight:number
}

const MyButton = ({buttonText,image,imageAlt,imageWidth,imageHeight}:MyButtonProps) => {
  return (
    <button className="flex justify-center items-center px-6 py-3 my-4 rounded-full bg-peachy text-white hover:bg-peachy-dark">
        {buttonText}
        <Image className={`${image =='' ? "": "ml-4"}`} src={image} alt={imageAlt} width={imageWidth} height={imageHeight}/>
    </button>
  )
}

export default MyButton
