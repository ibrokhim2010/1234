import React from 'react'
import { NavLink } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { RiInstallLine } from "react-icons/ri";
import { TbCoin } from "react-icons/tb";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LuFiles } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <NavLink 
        to="/" 
        className={({ isActive }) => `flex items-center space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <RxDashboard />
        <span>Dashboard</span>
      </NavLink>
      <NavLink 
        to="/leads" 
        className={({ isActive }) => `flex items-center space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <RiInstallLine />
        <span>Leads</span>
      </NavLink>
      <NavLink 
        to="/Transactions" 
        className={({ isActive }) => `flex items-center space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <TbCoin />
        <span>Transactions</span>
      </NavLink>
      <NavLink 
        to="/Analytics" 
        className={({ isActive }) => `flex items-center space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <TbBrandGoogleAnalytics />
        <span>Analytics</span>
      </NavLink>
      <NavLink 
        to="/Integration" 
        className={({ isActive }) => `flex items-center space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <AiOutlineThunderbolt />
        <span>Integration</span>
      </NavLink>
      <NavLink 
        to="/Calendar" 
        className={({ isActive }) => `flex items-center space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <IoCalendarOutline />
        <span>Calendar</span>
      </NavLink>
      <NavLink 
        to="/Pages" 
        className={({ isActive }) => `flex items-center space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <LuFiles />
        <span>Pages</span>
      </NavLink>
      <NavLink 
        to="/Settings" 
        className={({ isActive }) => `flex items-center space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <IoSettingsOutline />
        <span>Settings</span>
      </NavLink>
      <NavLink 
        to="/Documentation" 
        className={({ isActive }) => `flex items-center space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <HiOutlineDocumentText />
        <span>Documentation</span>
      </NavLink>
    </div>
  )
}

export default Sidebar
