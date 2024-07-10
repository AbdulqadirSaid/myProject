import React, { useState } from 'react';
import axios from 'axios';

const AddMenuItem = () => {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0.0);
  const [status, setStatus] = useState('');
  const [action, setAction] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const menuItem = {
      foodName: foodName,
      quantity: quantity,
      price: price,
      status: status,
      action: action,
    };
    axios.post('http://localhost:8080/api/menuitem/add', menuItem)
     .then((response) => {
        console.log(response.data);
        alert('Menu item added successfully!');
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
          <label htmlFor="status">Status:</label>
          <input type="text" id="status" name="status" required value={status} onChange={(event) => setStatus(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="action">Action:</label>
          <input type="text" id="action" name="action" required value={action} onChange={(event) => setAction(event.target.value)} />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddMenuItem;