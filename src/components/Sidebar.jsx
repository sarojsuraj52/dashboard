import React from 'react'
import '../styles/Sidebar.css'
import DiamondIcon from '@mui/icons-material/Diamond';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
        <div className="logo">
            <DiamondIcon className='logo'/>
        </div>

        <div className="navigation-container">
            <div className="home">
            <HomeIcon />
            </div>
            <div className="second">
            <BarChartIcon />
            </div>
            <div className="third">
                <AssignmentTurnedInIcon />
            </div>
            <div className="fourth">
                <AccountBalanceWalletIcon />
            </div>
            <div className="fifth">
                <ShoppingBagIcon />
            </div>
        </div>

        <div className="logout">
            <LogoutIcon />
        </div>
    
    </div>
  )
}
