import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LockIcon from '@mui/icons-material/Lock';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';



const Sidebar = () => {
  return (
    <div className='sidebar'> 
    <div className="top">
        <span className="logo">adminPanel</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">Main</p>
                  <li>
                      <DashboardIcon className="icon"/><span>Dashboard</span></li>
                      <p className="title">Lists</p>
                      <li>                   
                      <PersonIcon className="icon"/><span>Users</span></li>
            <li><CategoryIcon className="icon"/><span>Products</span></li>
            <li><PaymentIcon className="icon"/><span>Orders</span></li>
            <li><LocalShippingIcon className="icon"/><span>Delivery</span></li>
            <p className="title">Useful</p>
            <li><QueryStatsIcon className="icon"/><span>Stats</span></li>
            <li><CircleNotificationsIcon className="icon"/><span>Notifications</span></li>
            <p className="title">Service</p>
            <li><FavoriteBorderIcon className="icon"/><span>System Health</span></li>
            <li><LockIcon className="icon"/><span>Logs</span></li>
            <li><PsychologyIcon className="icon"/><span>Settings</span></li>
            <p className="title">User</p>
            <li><AccountBoxIcon className="icon"/><span>Profile</span></li>
            <li><LogoutIcon className="icon"/><span>Logout</span></li>
            </ul>
          
            </div>
        <div className="bottom">
         <div className="colorOptions"></div>
        <div className="colorOptions"></div>
        </div>
        </div>
  )
}

export default Sidebar