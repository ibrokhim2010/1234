import React from 'react'
import { Link } from 'react-router-dom';


const Documentation = () => {
    return (
        <div className='flex  items-center justify-center h-full min-h-[85vh] text-9xl text-blue-400'>
           <Link to="/Facts">
           
            <button  className=" px-10 py-9 font-300 text-md bg-blue-500 text-white rounded-lg border-blue-900 border-4">Bosgan Gey</button>
            </Link>
            
            
           
            
          
        </div>
    )
}

export default Documentation  