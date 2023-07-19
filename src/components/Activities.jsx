import React from 'react'
import Resort1 from '../assets/resort1.jpg'
import Resort2 from '../assets/resort2.jpg'
import Resort3 from '../assets/resort3.jpg'

function Activities() {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
            <img src={Resort1} alt='' className='w-full h-full object-cover relative border-4 border-white shadow-lg' />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruises</h3>
            <img src={Resort2} alt='' className='w-full h-full object-cover relative border-4 border-white shadow-lg' />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Excursions</h3>
            <img src={Resort3} alt='' className='w-full h-full object-cover relative border-4 border-white shadow-lg' />
        </div>
    </div>
  )
}

export default Activities