import React from 'react'
import Gallery1 from '../assets/gallery1.jpg'
import Gallery2 from '../assets/gallery2.jpg'
import Gallery3 from '../assets/gallery3.jpg'
import Gallery4 from '../assets/gallery4.jpg'
import Gallery5 from '../assets/gallery5.jpg'

function Gallery() {
  return (
    <div id='gallery' className='max-w-[1140px] w-full m-auto px-4 py-16'>
        <h2 className='text-center text-gray-700 py-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src={Gallery1} alt='gallery' />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={Gallery2} alt='gallery' />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={Gallery3} alt='gallery' />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={Gallery4} alt='gallery' />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={Gallery5} alt='gallery' />
            </div>
        </div>
    </div>
  )
}

export default Gallery