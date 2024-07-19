import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateMenuItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/api/menu-items/${id}`)
      .then((response) => {
        const menuItem = response.data;
        setFoodName(menuItem.foodName);
        setQuantity(menuItem.quantity);
        setPrice(menuItem.price);
        setDescription(menuItem.description);
        setStatus(menuItem.status.toString()); // Convert boolean to string for input field
      })
      .catch((error) => {
        console.error('Error fetching menu item:', error);
        alert('Error fetching menu item!');
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const menuItem = {
      foodName: foodName,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      description: description,
      status: status === 'true' ? true : false, // Convert string back to boolean
    };

    axios.put(`http://localhost:8080/api/menu-items/${id}`, menuItem)
      .then((response) => {
        console.log(response.data);
        alert('Menu item updated successfully!');
        navigate('/admindashboard/Menu-tems'); // Navigate to the menu items page after updating
      })
      .catch((error) => {
        console.error('Error updating menu item:', error);
        alert('Error updating menu item!');
      });
  };

  return (
    <div className="update-menu-item">
      <h2>Update Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="foodName">Food Name:</label>
          <input type="text" id="foodName" name="foodName" required value={foodName} onChange={(event) => setFoodName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" required value={quantity} onChange={(event) => setQuantity(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" step="0.01" required value={price} onChange={(event) => setPrice(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required value={description} onChange={(event) => setDescription(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select id="status" name="status" required value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </div>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default UpdateMenuItem;
