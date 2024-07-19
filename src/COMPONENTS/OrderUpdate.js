import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const OrderForm = () => {
  const { id } = useParams(); // Get the id from the URL parameters
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/view-orders/${id}`)
        .then(response => {
          const order = response.data;
          setFoodName(order.foodName || '');
          setQuantity(order.quantity || 1);
          setPrice(order.price || 0);
          setDeliveryDate(order.deliveryDate || '');
          setDeliveryTime(order.deliveryTime || '');
        })
        .catch(error => {
          console.error('Error fetching order details:', error);
          alert('Error fetching order details!');
        });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!id) {
      alert('Order ID is not defined!');
      return;
    }

    const updatedOrder = {
      foodName,
      quantity,
      price,
      deliveryDate,
      deliveryTime
    };

    axios.put(`http://localhost:8080/api/view-orders/${id}`, updatedOrder)
      .then(response => {
        console.log('Order updated successfully:', response.data);
        alert('Order updated successfully!');
        navigate('/Customerdashboard/view'); // Navigate to another page after successful update
      })
      .catch(error => {
        console.error('Error updating order:', error);
        alert('Error updating order!');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Update Order</h1>
      <label>
        Food Name:
        <input type="text" value={foodName} onChange={(event) => setFoodName(event.target.value)} required />
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(event) => setQuantity(parseInt(event.target.value))} min="1" required />
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={price} onChange={(event) => setPrice(parseFloat(event.target.value))} min="0" required />
      </label>
      <br />
      <label>
        Delivery Date:
        <input type="date" value={deliveryDate} onChange={(event) => setDeliveryDate(event.target.value)} required />
      </label>
      <br />
      <label>
        Delivery Time:
        <input type="time" value={deliveryTime} onChange={(event) => setDeliveryTime(event.target.value)} required />
      </label>
      <br />
      <button type="submit">Update Order</button>
    </form>
  );
};

export default OrderForm;
