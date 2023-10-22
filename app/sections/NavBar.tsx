"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import { MenuIcon, NavItems, headerLogo } from '../constants'
import Link from 'next/link'

const NavBar = () => {
  const [dropDown,setDropDown]=useState<boolean>(false)
        
  return (
    <header className='w-full max-container flex  justify-between py-8 px-12 gap-10 absolute z-20 '>
        <div className='w-full flex justify-evently'>
        <Link href={"#Hero"}>
       <Image 
        src={headerLogo} alt={'header-logo'} width={140} height={100}        
        />
        </Link>
        <ul className='tracking-wider flex justify-center items-center gap-32 max-md:hidden max-lg:gap-14  w-full'>
       
            {NavItems.map((item)=>{
                return <li key={item.label} >
                   <Link href={item.url} className='text-gray-500 text-lg hover:text-peachy'> {item.label}</Link>
                </li>
            })}
        </ul>
        </div>
        {/* MOBILE */}
        <div className="flex flex-col justify-center items-end self-start max-md:mr-12 absolute right-0">
        <div className='hidden max-md:flex justify-center items-center cursor-pointer'
            onClick={()=>{setDropDown((prev)=>!prev)}}>
            <Image src={MenuIcon} alt={'menu'} width={20} height={20}         />
        </div >
        {dropDown && <div className='dropdown md:hidden '>
        <ul className='flex flex-col justify-center items-center gap-8 '>
            {NavItems.map((item)=>{
                return <li key={item.label}  className='flex flex-col justify-center items-center '
                onClick={()=>{setDropDown(false)}}>
                   <Link href={item.url} className='self-center hover:text-peachy'> {item.label}</Link>
                </li>
            })}
        </ul>
        </div>
        }
        </div>
       
    </header>
  )
}

export default NavBar