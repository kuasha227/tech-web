import React from 'react'

const Experts = () => {
  return (
    <div className='mx-width-[1240px] mx-auto py-[150px] md:grid grid-cols-3 px-[50px] justify-center items-center bg-gray-200'>
      <div className='col-span-1 px-[70px] drop-shadow-md'>
        <img src='https://static.vecteezy.com/system/resources/previews/019/153/003/original/3d-minimal-programming-icon-coding-screen-web-development-concept-laptop-with-a-coding-screen-and-a-coding-icon-3d-illustration-png.png'/>
      </div>
      <div className='col-span-2 px-[50px]'>
        <h4 className='text-[#00c2a2] font-bold text-xl py-2'>Learn With Experts</h4>
        <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error debitis ducimus quam eveniet incidunt. Vero corporis nulla quod obcaecati, omnis a. Distinctio veritatis laudantium eius omnis quae excepturi itaque quasi!</p>
        <button className='font-semibold p-3 bg-black text-white rounded-md hover:bg-[#00c2a2] text-white rounded-md drop-shadow-md'>Learn More</button>
      </div>
    </div>
  )
}

export default Experts
