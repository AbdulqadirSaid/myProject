
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import MenuItems from './MenuItems';
import OrderForm from './OrderForm';
import AddMenuItem from './AddMenuItem';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Home from './Home';
import LogOut from './LogOut';


const AdminDashboard = () => {
    return (
        <div className="admindashboard">
            <header className="header">
                <h1>ENJOY OUR FANTASTIC MENU ONLINE</h1>
            </header>
            <div className="main-content">
                <nav className="sidebar">
                   
                    <ul>
                        <li><Link to="/admindashboard/home">Home</Link></li>
                        <li><Link to="/admindashboard/menu-items">MenuItems</Link></li>
                        <li><Link to="/admindashboard/order-form">OrderForm</Link></li>
                        
                    </ul>
                    <ul>
                        <li><Link to="/admindashboard/add-menu-item">AddMenuItem</Link></li>
                        
                    </ul>
                    <ul>
                        <li><Link to="/admindashboard/about-us">About Us</Link></li>
                        <li><Link to="/admindashboard/contact-us">Contact Us</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/admindashboard/log-out">Log Out</Link></li>
                    </ul>
                </nav>
                <div className="content">
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="MenuItems" element={<MenuItems />} />
                        <Route path="order-form" element={<OrderForm />} />
                        <Route path="add-menu-item" element={<AddMenuItem />} />
                        <Route path="about-us" element={<AboutUs />} />
                        <Route path="contact-us" element={<ContactUs />} />
                        <Route path="/logout" element={<LogOut />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
