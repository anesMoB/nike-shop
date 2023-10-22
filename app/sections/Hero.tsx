'use client';
import Image from "next/image"
import { ArrowRight, HeroTexts, Stats, heroImgages } from "../constants"
import MyButton from "../componants/MyButton"
import ShoesCard from "../componants/ShoesCard"
import { useState } from "react"

const Hero = () => {
    const [bgHero, setbgHero] = useState(heroImgages[0].imgUrl)
  return (
   <section id="Hero" className="relative  w-full  flex flex-col justify-start  xl:flex-row   ">
    <div className="relative px-12 z-10 flex flex-col justify-center items-start xl:w-2/5 w-full pt-36 gap-6 tracking-wider">
    <p className="text-peachy text-xl">{HeroTexts[0]}</p>
    <div className="text-8xl font-bold relative max-md:text-7xl ">
        <p className="mb-6 md:whitespace-nowrap bg-white pr-8 pt-8 pb-8 ">{HeroTexts[1]}</p>
        <span className="text-peachy  ">{HeroTexts[2]}</span> {HeroTexts[3]}
    </div>
    <p className="text-gray-600 sm:max-w-sm leading-8">{HeroTexts[4]}</p>
    <MyButton buttonText={HeroTexts[5]} image={ArrowRight} imageAlt="arrow-right" imageHeight={20} imageWidth={20}/>

    <ul className="flex justify-start items-center flex-wrap  gap-8 max-md:mb-12">
        {Stats.map((stat)=>{
            return <div key={stat.label} className="gap-8 mt-12 mb-14">
                <h2 className="text-5xl font-bold max-md:text-4xl">{stat.stats}</h2>
                <h3 className="text-gray-600">{stat.label}</h3>
            </div>
        })}
    </ul>
    </div>
    <div className=" relative z-8 flex-1 flex flex-col justify-center items-center   bg-cover   bg-center bg-hero-background w-full">
        <Image src={bgHero} alt={"big-shoe1"} width={600} height={600}  className="object-contain"/>
        <ul className="flex justify-start items-center absolute -bottom-[5%] max-xl:-bottom-[18%]  gap-6 max-md:mx-2">
        {heroImgages.map((img,index)=>{
            return <div key={index} className="">
                    <ShoesCard image={img.imgUrl} imageAlt={img.imgAlt} imageHeight={200} imageWidth={200} bgHero={bgHero} setbgHero={setbgHero}/>    
                    </div>
        })}
    </ul>
    
    </div>
    </section>
    
  )
}

export default Hero