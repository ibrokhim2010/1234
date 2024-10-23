import React from 'react'
import { GiCheckMark } from "react-icons/gi";

const Dashboard = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 h-full'>

       <h1 className='font-bold text-2xl'>Admin Dashboard Starter Kit</h1>
       
       <p className='flex items-center'>
         <GiCheckMark className="mr-2" /> Light
       </p>
       
       <p className='flex items-center'>
         <GiCheckMark className="mr-2" /> Redux
       </p>

       <p className='flex items-center'>
         <GiCheckMark className="mr-2" /> Calendar
       </p>
       
       <p className='flex items-center'>
         <GiCheckMark className="mr-2" /> User
       </p>
       
       <p className='flex items-center'>
         <GiCheckMark className="mr-2" /> Daisy
       </p>

      <button className='btn bg-base-100 rounded-lg mt-4 border-2 border-white'>Get Started</button>
    </div>
  )
}

export default Dashboard;
