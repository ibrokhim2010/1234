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
import { BsChevronDown } from "react-icons/bs";
import { BsBrush } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <NavLink 
        to="/" 
        className={({ isActive }) => `flex items-center justify-between space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <span className="flex items-center space-x-2">
          <RxDashboard />
          <span>Dashboard</span>
        </span>
      </NavLink>

      <NavLink 
        to="/leads" 
        className={({ isActive }) => `flex items-center justify-between space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <span className="flex items-center space-x-2">
          <RiInstallLine />
          <span>Leads</span>
        </span>
      </NavLink>

      <NavLink 
        to="/transactions" 
        className={({ isActive }) => `flex items-center justify-between space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <span className="flex items-center space-x-2">
          <TbCoin />
          <span>Transactions</span>
        </span>
      </NavLink>

      <NavLink 
        to="/analytics" 
        className={({ isActive }) => `flex items-center justify-between space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <span className="flex items-center space-x-2">
          <TbBrandGoogleAnalytics />
          <span>Analytics</span>
        </span>
      </NavLink>

      <NavLink 
        to="/integration" 
        className={({ isActive }) => `flex items-center justify-between space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <span className="flex items-center space-x-2">
          <AiOutlineThunderbolt />
          <span>Integration</span>
        </span>
      </NavLink>

      <NavLink 
        to="/calendar" 
        className={({ isActive }) => `flex items-center justify-between space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <span className="flex items-center space-x-2">
          <IoCalendarOutline />
          <span>Calendar</span>
        </span>
      </NavLink>

      <NavLink 
        to="/pages" 
        className={({ isActive }) => `flex items-center justify-between space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <span className="flex items-center space-x-2">
          <LuFiles />
          <span>Pages</span>
        </span>
        <BsChevronDown /> {/* O'ng tomonga qo'yilgan */}
      </NavLink>

      <NavLink 
        to="/settings" 
        className={({ isActive }) => `flex items-center justify-between space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <span className="flex items-center space-x-2">
          <IoSettingsOutline />
          <span>Settings</span>
        </span>
        <BsChevronDown /> {/* O'ng tomonga qo'yilgan */}
      </NavLink>

      <NavLink 
        to="/documentation" 
        className={({ isActive }) => `flex items-center justify-between space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <span className="flex items-center space-x-2">
          <HiOutlineDocumentText />
          <span>Documentation</span>
        </span>
        <BsChevronDown /> {/* O'ng tomonga qo'yilgan */}
      </NavLink>

      <NavLink 
        to="/facts" 
        className={({ isActive }) => `flex items-center justify-between space-x-2 ${isActive ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
      >
        <span className="flex items-center space-x-2">
        <BsBrush />
          <span>Facts</span>
        </span>
      </NavLink>
    </div>
  );
}

export default Sidebar;
