import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Header = () => {
    const [toggle,setToggle]=useState(false);
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
            title:'About'
        },
        {
            title:'Contact'
        },
    ]
  return (
    <div className='border-gray-100 drop-shadow-sm max-w-100 bg-[#00c2a2] p-5 flex justify-between items-center'>
      <div className='text-white font-bold text-3xl px-5 hover:text-black'>
        TECH-WEB
      </div>
    {
      toggle ? 
      <AiOutlineClose onClick={()=> (setToggle(!toggle))} className='text-white text-2xl md:hidden block'/> 
      : 
      <AiOutlineMenu onClick={()=> (setToggle(!toggle))} className='text-white text-2xl md:hidden block'/>
    }
      <div className='hidden md:flex gap-5 justify-center items-center text-white'>
        {
            menus.map((item, index)=>(
                <ul key={index} className='hover:text-black text-lg font-semibold px-3'>{item.title}</ul>
            )
            )
        }
      </div>
      <div className={`md:hidden gap-5 justify-center items-center text-white fixed bg-[#00c2a2] ${toggle ? 'left-0' : 'left-[-100%]'} top-[75px] px-10 w-[300px] h-screen duration-500`}>
        {
            menus.map((item, index)=>(
                <ul key={index} className='hover:text-black text-lg font-semibold p-3'>{item.title}</ul>
            )
            )
        }
      </div>
    </div>
  )
}

export default Header
