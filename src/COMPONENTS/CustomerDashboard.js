import React from 'react';

const CustomerDashboard = () => {
  return (
    <div className="container">
      <h1>Customer Dashboard</h1>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/menuitems">Menu Items</a></li>
        <li><a href="/orderform">Order Form</a></li>
      </ul>
    </div>
  );
};

export default CustomerDashboard;