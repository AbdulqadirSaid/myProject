import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0); // assume price is set by the admin
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newOrder = {
      foodName,
      quantity,
      price,
      deliveryDate,
      deliveryTime
    };

    axios.post('http://localhost:8080/api/view-orders', newOrder)
      .then(response => {
        console.log('Order submitted successfully:', response.data);
        alert('Order placed successfully!');
        // Optionally clear the form after successful submission
        setFoodName('');
        setQuantity(1);
        setPrice(0);
        setDeliveryDate('');
        setDeliveryTime('');
      })
      .catch(error => {
        console.error('Error submitting order:', error);
        alert('Error placing order!');
      });
  };

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Place Your Order</h1>
      <label>
        Food Name:
        <input type="text" value={foodName} onChange={(event) => setFoodName(event.target.value)} />
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
      </label>
      <br />
      <label>
        Delivery Date:
        <input type="date" value={deliveryDate} onChange={(event) => setDeliveryDate(event.target.value)} />
      </label>
      <br />
      <label>
        Delivery Time:
        <input type="time" value={deliveryTime} onChange={(event) => setDeliveryTime(event.target.value)} />
      </label>
      <br />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;
