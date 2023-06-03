import React from 'react'

import { BsCart4, BsSearch } from 'react-icons/bs'
import { HiShoppingCart } from 'react-icons/hi'

function Header() {
  return (
    <div className='uppercase flex flex-row justify-between mb-24'>
        <h1 className='text-3xl font-bold'>Fashion</h1>
        <div className='flex flex-row gap-8'>
            <h1 className='text-[15px]'>Men</h1>
            <h1 className='text-[15px]'>Women</h1>
            <h1 className='text-[15px]'>Kids</h1>
            <h1 className='text-[15px]'>Collection</h1>
            <h1 className='text-[15px]'>Trends</h1>
        </div>
        <div className='flex flex-row gap-4'>
            <BsSearch/>
            <HiShoppingCart className='text-[#003559] text-2xl'/>
        </div>
    </div>
  )
}

export default Header