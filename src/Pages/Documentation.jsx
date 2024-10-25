import React from 'react'
import { Link } from 'react-router-dom';


const Documentation = () => {
    return (
        <div className='flex  items-center justify-center h-full min-h-[85vh] text-9xl text-blue-400'>
            <Link to="/Facts">

                <button className="px-10 py-9 font-semibold text-md bg-blue-500 text-white rounded-lg border-blue-900 border-4 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-95">
                    Bosgan Gey
                </button>

            </Link>





        </div>
    )
}

export default Documentation  