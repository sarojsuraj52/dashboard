import React from "react";
import "../../styles/Dashboard/Dashboard.css";
import ShopIcon from '@mui/icons-material/Shop';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PaidIcon from '@mui/icons-material/Paid';
import ProgressBar from "./ProgressBar";
import Activity from "./Activity";
import OrdersFeed from "./OrdersFeed";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Dashboard</h1>
      </div>

      <div className="calc-container">
        <div className="total-container">
            <div className="order-box">
                <div className="icon-box icon-blue">
                <ShopIcon className="total-icon" />
                </div>
                <p>Total Orders</p>
                <div>
                    <span className="count">75</span>
                    <span className="green">▲ 3%</span>
                </div>
            </div>
            <div className="order-box">
                <div className="icon-box icon-green">
                <ShoppingBagIcon className="total-icon" />
                </div>
                <p>Total Delivered</p>
                <div>
                    <span className="count">70</span>
                    <span className="red">▼ 3%</span>
                </div>
            </div>
            <div className="order-box">
                <div className="icon-box icon-red">
                <ShoppingBagIcon className="total-icon" />
                </div>
                <p>Total Cancelled</p>
                <div>
                    <span className="count">05</span>
                    <span className="green">▲ 3%</span>
                </div>
            </div>
            <div className="order-box">
                <div className="icon-box icon-pink">
                <PaidIcon className="total-icon" />
                </div>
                <p>Total Revenue</p>
                <div>
                    <span className="count">$12k</span>
                    <span className="red">▼ 3%</span>
                </div>
            </div>
           
        </div>
        <div className="net-container">
            <div className="value">
                <span>Net Profit</span>
                <span className="net-value">$6759.25</span>
                <span className="green">▲ 3%</span>
            </div>
            <div className="progress-bar">
                <ProgressBar />
                <p>*The values here has been rounded off.</p>
            </div>

        </div>
      </div>
    {/* End of total section */}
      
      <Activity />

      <OrdersFeed />
    </div>
  );
}
