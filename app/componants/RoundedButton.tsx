

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

type RoundedButtonProps={
  buttonText:string 
  image:string | StaticImport
  imageAlt:string
  imageWidth:number
  imageHeight:number
}

const RoundedButton = ({buttonText,image,imageAlt,imageWidth,imageHeight}:RoundedButtonProps) => {
  return (
    <button className="flex justify-center items-center px-4 py-3 my-4 rounded-full text-black border-2 hover:bg-gray-300">
        {buttonText}
        <Image className={`${image =='' ? "": "ml-4"}`} src={image} alt={imageAlt} width={imageWidth} height={imageHeight}/>
    </button>
  )
}

export default RoundedButton
