
import { StaticImageData, StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'

type ShoesCardProps={
    image:string | StaticImport
    bgHero:string | StaticImport
    imageAlt:string
    imageWidth:number
    imageHeight:number
    setbgHero:Dispatch<SetStateAction<string>> 
}

const ShoesCard = ({image,imageAlt,imageWidth,imageHeight,bgHero,setbgHero}:ShoesCardProps) => {
    const onClickHandler=()=>{
        setbgHero(image as string)
    }
  return (
    <div onClick={onClickHandler} className={`rounded-xl p-2 bg-center bg-cover bg-collectionBg cursor-pointer shoesCardOnHover ${image==bgHero ? "border-peachy border-2" : "border-transparent"} ` } >
        <Image src={image} alt={imageAlt} width={imageWidth} height={imageHeight}  className="object-contain rounded-none"
        
        
        />

    </div>
  )
}

export default ShoesCard