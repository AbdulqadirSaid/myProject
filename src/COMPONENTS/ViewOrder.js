import React, { useState, useEffect } from 'react';

const ViewOrder = () => {
  // Sample data to mimic order status; you would normally fetch this from an API
  const [orders, setOrders] = useState([
    // Initialize with an empty array
  ]);

  // Fetching data (simulation)
  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = () => {
      // Replace with API call
      const sampleData = [
        {
          foodName: 'Burger',
          quantity: 2,
          price: 10.99,
          status: 'Pending',
          action: 'Cancel'
        },
        {
          foodName: 'Fries',
          quantity: 1,
          price: 3.99,
          status: 'Delivered',
          action: 'Rate'
        },
        // Add more orders here
      ];
      setOrders(sampleData); // Replace with actual data
    };
    fetchData();
  }, []);

  return (
    <div className="view-order">
      <h2>Order Status</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.foodName}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>{order.status}</td>
              <td>{order.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewOrder;