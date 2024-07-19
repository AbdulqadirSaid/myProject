import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from  './COMPONENTS/Login';
import Registration from './COMPONENTS/Registration';
import CustomerDashboard from './COMPONENTS/CustomerDashboard';
import AdminDashboard from './COMPONENTS/AdminDashboard';
import Home from './COMPONENTS/Home';
import UpdateMenuItem from './COMPONENTS/UpdateItems';
import OrderUpdate from './COMPONENTS/OrderUpdate'
import AdminOrderUpdate from './COMPONENTS/AdminOrderUpdate'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path="/register" element={<Registration />} />
        <Route path="/customerdashboard/*" element={<CustomerDashboard />} />
        <Route path="/admindashboard/*" element={<AdminDashboard />} />
        <Route path='/update' element={<UpdateMenuItem/>}/>
        <Route path='/update/:id' element={<UpdateMenuItem/>}/>  
        <Route path='/order_update' element={<OrderUpdate/>}/>
        <Route path='/order_update/:id' element={<OrderUpdate/>}/>
        <Route path='/admin_order_update' element={<AdminOrderUpdate/>}/>
        <Route path='/admin_order_update/:id' element={<AdminOrderUpdate/>}/>


      </Routes>
    </Router>
  );
};

export default App;