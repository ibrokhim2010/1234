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
        <aside className='w-1/12 bg-base-100 '>
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