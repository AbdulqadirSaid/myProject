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

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/menu-items/${id}`, { method: 'DELETE' });
      setMenuItems(menuItems.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting menu item:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/update/${id}`);
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
          <th>Action</th>
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
            <td>
              <button onClick={() => handleEdit(item.id)}>Update</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MenuItems;
