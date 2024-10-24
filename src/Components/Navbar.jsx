import React from 'react'
import { IoMoon } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full p-4' >
      <h1 className='text-3xl p-3 font-bold '>
        <span className='text-blue-600'>Mars</span>
        <span className='text-red-600'>°</span>

      </h1>
      
      <div className='flex space-x-4 text-2xl'>
      <IoMoon />
      <FaRegBell />
      <CgProfile />
      </div>
    </div>
  )
}

export default Navbar 