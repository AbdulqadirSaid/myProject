import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/menu-items');
      const data = await response.json();
      setMenuItems(data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Food Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {menuItems.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.foodName}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>{item.status ? 'Available' : 'Not Available'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MenuItems;
