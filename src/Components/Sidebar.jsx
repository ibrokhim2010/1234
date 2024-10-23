import React from 'react'
import { Link } from 'react-router-dom';
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
    <div>
        <Link to="/">
        <RxDashboard />
            <span>Dashboard</span>        
        </Link>
        <Link to="/leads">
        <RiInstallLine />
            <span>Leads</span>        
        </Link>
        <Link to="/Transactions">
        <TbCoin />
            <span>Transactions</span>        
        </Link>
        <Link to="/Analytics">
        <TbBrandGoogleAnalytics />
            <span>Analytics</span>        
        </Link>
        <Link to="/Integration">
        <AiOutlineThunderbolt />
            <span>Integration</span>        
        </Link>
        <Link to="/Calendar">
        <IoCalendarOutline />
            <span>Calendar</span>        
        </Link>
        <Link to="/Pages">
        <LuFiles />
            <span>Pages</span>        
        </Link>
        <Link to="/Settings">
        <IoSettingsOutline />
            <span>Settings</span>        
        </Link>
        <Link to="/Documentation">
        <HiOutlineDocumentText />
            <span>Documentation</span>        
        </Link>
        
    </div>
  )
}

export default Sidebar