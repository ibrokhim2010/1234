import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Components/Sidebar'

const App = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main className='flex'>
        <aside>
          <Sidebar/>
        </aside>
        <section>
          <Outlet/>
        </section>
      </main>
    </div>
  )
}

export default App