import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Assuming you're using Reach Router or React Router

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const navigate= useNavigate ();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get('http://localhost:8080/api/view-orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
        alert('');
      });
  };

  const handleDeleteOrder = (id) => {
    axios.delete(`http://localhost:8080/api/view-orders/${id}`)
      .then(response => {
        alert('Order deleted successfully!');
        fetchOrders(); // Refresh the order list after deletion
      })
      .catch(error => {
        console.error('Error deleting order:', error);
        alert('Error deleting order!');
      });
  };

  const handleUpdateOrder = (id) => {
    // Navigate to update page or form for the order with ID 'id'
    navigate(`/order_update/${id}`); // Example URL, adjust as per your routes
  };

  return (
    <div className="order-table">
      <h2>View Orders</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Food Name</th>
            <th>Quantity</th>
            <th>Delivery Date</th>
            <th>Delivery Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.foodName}</td>
              <td>{order.quantity}</td>
              <td>{order.deliveryDate}</td>
              <td>{order.deliveryTime}</td>
              <td>
                <button onClick={() => handleUpdateOrder(order.id)}>Update</button>
                <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
