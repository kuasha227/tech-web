import React from 'react'

const Subscription = () => {
  return (
    <div className='max-width-[1240px] mx-auto w-full bg-[#00c2a2] justify-center md:flex justify-between items-center py-[100px]'>
      <div className='md:px-[100px] text-white'>
        <h2 className='font-bold text-2xl'>Want to learn latest I.T Skills?</h2>
        <p>Sign up to our newsletter and stay up to date</p>
      </div>
      <div className='md:px-[100px]'>
      <div className='flex gap-3 py-3'>
        <input className='rounded drop-shadow-md px-2 py-2'placeholder='Email...'/>
        <button className='bg-black rounded p-3 text-white font-semibold hover:bg-white drop-shadow-md text-[#00c2a2]'>Notify Me</button>
        </div>
        <p className='text-white font-semibold'>We care about the protection of your data.<br/> Read our Privacy & Policy</p>
      </div>
    </div>
  )
}

export default Subscription
