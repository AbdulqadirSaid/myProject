import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import MenuItemsList from './MenuItemsList';
import OrderForm from './OrderForm';
import ContactUs from './ContactUs';
import CustomerViewOrder from './CustomerViewOrder'


const CustomerDashboard = () => {
  return (
    <div className="customerdashboard">
      <header className="header">
        <h1 style={{ color: '#fff' }}>WELCOME AND ENJOY OUR FANTASTIC MENU ONLINE</h1>
      </header>
      <div className="main-content">
        <nav className="sidebar">
          <ul>
            <li><Link to="/customerdashboard/home">Home</Link></li>
            <li><Link to="/customerdashboard/menuitemslist">Menu Items List</Link></li>
            <li><Link to="/customerdashboard/orderform">Order Form</Link></li>
            <li><Link to="/Customerdashboard/view">View Order</Link></li>
            <li><Link to="/customerdashboard/aboutus">About Us</Link></li>
            <li><Link to="/customerdashboard/contactus">Contact Us</Link></li>
            <li><Link to="/">Log Out</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="menuitemslist" element={<MenuItemsList />} />
            <Route path="orderform" element={<OrderForm />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="view" element={< CustomerViewOrder/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;