

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
type ButtonFlexibleProps={
    buttonText:string 
    image:string | StaticImport
    imageAlt:string
    imageWidth:number
    imageHeight:number
  }
const ButtonFlexible = ({buttonText,image,imageAlt,imageWidth,imageHeight}:ButtonFlexibleProps) => {
    return (
        <button className="flex justify-center items-center px-6 py-4 my-4 rounded-full bg-peachy text-white hover:bg-peachy-dark w-full">
            {buttonText}
            <Image className={`${image =='' ? "": "ml-4"}`} src={image} alt={imageAlt} width={imageWidth} height={imageHeight}/>
        </button>
      )

}

export default ButtonFlexible
