import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.fashion_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Sustainable Fashion</p>
            <p className='text-gray-400'>Choose pre-loved items and reduce fashion waste, helping the planet.</p>
        </div>
        <div>
            <img src={assets.money_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Affordable Prices</p>
            <p className='text-gray-400'>High-quality items at pocket-friendly prices for everyone.</p>
        </div>
        <div>
            <img src={assets.community_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Community Impact</p>
            <p className='text-gray-400'>Every purchase supports local thrifting communities and initiatives.</p>
        </div>
        <div>
            <img src={assets.shopping_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Curated Collections</p>
            <p className='text-gray-400'>Handpicked items for style, quality, and uniqueness.</p>
        </div>
    </div>
  )
}

export default OurPolicy
