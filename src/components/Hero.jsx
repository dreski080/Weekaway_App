import React from 'react'
import Cover from '../assets/foto1.jpg'

function Hero() {
  return (
    <div className='w-full h-[90vh]'>
      <img src={Cover} alt='cover' className='w-full h-full object-cover' />
      <div className='max-w-[1140px] m-auto'>
      <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
        <h1 className='text-4xl font-bold'>Find Your Special Trip</h1>
        <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ullamcorper libero, sed consectetur ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed maximus tempus libero, vel pellentesque urna mollis sed.</p>
      </div>
      </div>
    </div>
  )
}

export default Hero