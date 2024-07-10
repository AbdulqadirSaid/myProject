import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from  './COMPONENTS/Login';
import Registration from './COMPONENTS/Registration';
import CustomerDashboard from './COMPONENTS/CustomerDashboard';
import AdminDashboard from './COMPONENTS/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Registration />} />
        <Route path="/customerdashboard" element={<CustomerDashboard />} />
        <Route path="/admindashboard/*" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;