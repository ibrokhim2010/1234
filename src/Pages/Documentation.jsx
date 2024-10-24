import React from 'react'
import { Link } from 'react-router-dom';
import { BsApple } from "react-icons/bs";

const Documentation = () => {
    return (
        <div className='flex  items-center justify-center h-full min-h-[85vh] text-9xl text-blue-400'>
            <Link to="/Facts">
            <BsApple   className='text-blue-900 hover:shadow-lg hover:shadow-cyan-400 rounded-full hover:border-2 hover:border-cyan-400 active:scale-75 active:transition-all' />
            
            </Link>
            
          
        </div>
    )
}

export default Documentation  