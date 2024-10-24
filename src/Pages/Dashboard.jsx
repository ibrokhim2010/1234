import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 p-20'>

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
      <Link to="/Leads">
        <button className='btn bg-base-100 rounded-lg mt-4 border-2 border-white'>Get Started</button>
      </Link>
    </div>
  )
}

export default Dashboard;
