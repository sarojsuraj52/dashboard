import React from 'react'
import '../../styles/Dashboard/OrdersFeed.css'
import OrderTable from './OrderTable'
import Feedback from './Feedback'

export default function OrdersFeed() {
  return (
    <div className='ordersfeed-container'>
    <div className="order-table">
      <h4>Recent Orders</h4>
      <OrderTable />
    </div>
    <div className="feedack">
      <h4>Customer's Feedback</h4>
      <div className="feedback-container">
        <Feedback />
      </div>
    </div>
    </div>
  )
}
