import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className='max-width-[1240px] mx-auto bg-[#00c2a2] items-center text-center py-[90px] font-bold'>
        <div className='text-2xl text-gray-600 py-5'>
            Learn With Us
        </div>
        <div className='text-6xl text-white py-5 drop-shadow-md'>
            Grow With Us
        </div>
        <div className='text-xl text-white py-5 drop-shadow-md md:text-3xl text-white py-5 drop-shadow-md'>
            Learn <Typed
                    strings={['Web Development With Us','JavaScript With Us','React js With Us','WordPress Design With Us','Digital Marketing With Us','Graphics Designing With Us']}
                    typeSpeed={40}
                loop />
        </div>
        <div className='py-5'>
        <button className='text-2xl bg-black text-white rounded-md p-3 hover:bg-white drop-shadow-md text-[#00c2a2]'>Learn More</button>
        </div>
    </div>
  )
}

export default Banner
