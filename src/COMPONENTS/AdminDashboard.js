import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import MenuItems from './MenuItems';
import AddMenuItem from './AddMenuItem';
import ViewOrder from './ViewOrder';
import AdminOrderForm from './AdminOrderForm';
import AdminViewOder from './AdminViewOder';
import Home from './Home';

const AdminDashboard = () => {
  return (
    <div className="admindashboard">
      <header className="header">
        <h1 style={{ color: '#fff' }}>ENJOY OUR FANTASTIC MENU ONLINE</h1>
      </header>
      <div className="main-content">
        <nav className="sidebar">
          <ul>
          <li><Link to="/admindashboard/home">Home</Link></li>
            <li><Link to="/admindashboard/add-menu-item">AddMenuItem</Link></li>
            <li><Link to="/admindashboard/Menu-tems">MenuItems</Link></li>
            <li><Link to="/admindashboard/admin-order-form">Order Form</Link></li>
            <li><Link to="/admindashboard/admin_view_order">ViewOrder</Link></li>
            <li><Link to="/">Log Out</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
           <Route path="home" element={<Home/>} />
            <Route path="Menu-tems" element={<MenuItems />} />
            <Route path="add-menu-item" element={<AddMenuItem />} />
            <Route path="view-order" element={<ViewOrder />} />
            <Route path="admin-order-form" element={<AdminOrderForm/>} />
            <Route path="admin_view_order" element={<AdminViewOder/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;