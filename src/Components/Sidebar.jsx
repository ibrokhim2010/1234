import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
        <Link to="/">
            {/* icon */}
            <span>Dashboard</span>        
        </Link>
        <Link to="/leads">
            {/* icon */}
            <span>Leads</span>        
        </Link>
        <Link to="/Transactions">
            {/* icon */}
            <span>Transactions</span>        
        </Link>
        <Link to="/Analytics">
            {/* icon */}
            <span>Analytics</span>        
        </Link>
        <Link to="/Integration">
            {/* icon */}
            <span>Integration</span>        
        </Link>
        <Link to="/Calendar">
            {/* icon */}
            <span>Calendar</span>        
        </Link>
        <Link to="/Pages">
            {/* icon */}
            <span>Pages</span>        
        </Link>
        <Link to="/Settings">
            {/* icon */}
            <span>Settings</span>        
        </Link>
        <Link to="/Documentation">
            {/* icon */}
            <span>Documentation</span>        
        </Link>
        
    </div>
  )
}

export default Sidebar