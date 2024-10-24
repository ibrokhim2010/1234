import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Components/Sidebar'


const App = () => {
  return (
    
    <div>
      <header  data-theme="night">
        <Navbar/>
      </header>
      <main data-theme="night" className='flex justify-center '>
        <aside className='bg-base-100 p-3 h-screen w-2/12'>
          <Sidebar/>
        </aside>
        <section data-theme="dark" className='flex-1 p-5'> 
          <Outlet/>
        </section>
      </main>
    </div>
  )
}

export default App    