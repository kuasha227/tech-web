import React from 'react'

const Header = () => {
    const menus=[
        {
            title:'Home'
        },
        {
            title:'Services'
        },
        {
            title:'Portfolio'
        },
        {
            title:'About Us'
        },
        {
            title:'Contact Us'
        },
    ]
  return (
    <div className='border-gray-100 drop-shadow-sm max-w-100 bg-[#00c2a2] p-5 flex justify-between items-center'>
      <div className='text-white font-bold text-3xl px-5 hover:text-black'>
        TECH-WEB
      </div>
      <div className='hidden md:flex gap-5 justify-center items-center text-white'>
        {
            menus.map((item, index)=>(
                <ul key={index} className='hover:text-black text-lg font-semibold'>{item.title}</ul>
            )
            )
        }
      </div>
    </div>
  )
}

export default Header
