import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMenuItem = () => {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false); // Assuming status is boolean
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const menuItem = {
      foodName: foodName,
      quantity: parseInt(quantity), // Convert to number if necessary
      price: parseFloat(price), // Convert to number if necessary
      description: description,
      status: status,
    };

    axios.post('http://localhost:8080/api/menu-items', menuItem)
      .then((response) => {
        console.log(response.data);
        alert('Menu item added successfully!');
        navigate('/admindashboard/Menu-tems'); // Navigate to the menu items page after adding
      })
      .catch((error) => {
        console.error(error);
        alert('Error adding menu item!');
      });
  };

  return (
    <div className="add-menu-item">
      <h2>Add Menu Item</h2>
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
          <select id="status" name="status" required value={status} onChange={(event) => setStatus(event.target.value === 'true')}>
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddMenuItem;
