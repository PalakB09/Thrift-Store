import React from 'react' 
import { assets } from '../assets/assets'
const Hero = () => { 
    return ( 
        <div
  className="flex flex-col sm:flex-row border rounded-xl"
  style={{
    backgroundColor: "#e0eacf", // olive background
    borderColor: "#556B2F",     // dark olive border
  }}>
  {/* Hero Left Side */}
  <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
    <div className="text-center">
      {/* Small Top Text */}
      <p className="font-medium text-sm md:text-base mb-2">
        Be the part of a change
      </p>

      {/* Main Heading */}
      <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-relaxed mb-4">
        Choose Pre-Loved
      </h1>

      {/* Stats */}
      <div className="flex flex-col items-center gap-2">
        <p className="font-semibold text-sm">24% Less Energy Used</p>
        <p className="font-semibold text-sm">25% Less Carbon Emission</p>
        <p className="font-semibold text-sm">32% Less Water used</p>

        {/* Divider Line */}
        <div className="w-8 md:w-11 h-[1px] bg-[#414141] mt-2"></div>
      </div>
    </div>
  </div>

  {/* Hero Right Side */}
  <div className="w-full sm:w-1/2 flex items-center justify-center">
    <img
      className="w-full sm:w-auto max-h-[500px] object-contain"
      src={assets.hero_img}
      alt="Hero"
    />
  </div>
</div>

    ) 
} 
export default Hero