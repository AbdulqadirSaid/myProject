import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateOrderForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/view-orders/${id}`)
        .then((response) => {
          const order = response.data;
          setFoodName(order.foodName);
          setQuantity(order.quantity);
          setPrice(order.price);
          setDeliveryDate(order.deliveryDate);
          setDeliveryTime(order.deliveryTime);
        })
        .catch((error) => {
          console.error('Error fetching order details:', error);
          alert('Error fetching order details!');
        });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedOrder = {
      foodName,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      deliveryDate,
      deliveryTime,
    };

    if (id) {
      axios.put(`http://localhost:8080/api/view-orders/${id}`, updatedOrder)
        .then((response) => {
          console.log('Order updated successfully:', response.data);
          alert('Order updated successfully!');
          navigate('/admindashboard/admin_view_order'); // Navigate to another page after successful update
        })
        .catch((error) => {
          console.error('Error updating order:', error);
          alert('Error updating order!');
        });
    } else {
      console.error('Creating new orders is not implemented in this example.');
      alert('Creating new orders is not implemented in this example.');
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
  };

  const resetForm = () => {
    setFoodName('');
    setQuantity(1);
    setPrice(0);
    setDeliveryDate('');
    setDeliveryTime('');
  };

  return (
    <div className="update-order-form">
      <h2>{id ? 'Update Order' : 'Place Your Order'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="foodName">Food Name:</label>
          <input type="text" id="foodName" name="foodName" required value={foodName} onChange={(event) => setFoodName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" required value={quantity} onChange={handleQuantityChange} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" step="0.01" required value={price} onChange={(event) => setPrice(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="deliveryDate">Delivery Date:</label>
          <input type="date" id="deliveryDate" name="deliveryDate" required value={deliveryDate} onChange={(event) => setDeliveryDate(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="deliveryTime">Delivery Time:</label>
          <input type="time" id="deliveryTime" name="deliveryTime" required value={deliveryTime} onChange={(event) => setDeliveryTime(event.target.value)} />
        </div>
        <button type="submit">{id ? 'Update Order' : 'Place Order'}</button>
      </form>
    </div>
  );
};

export default UpdateOrderForm;
