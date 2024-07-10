import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MenuItems = () => {
  // Example menu items data
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/menuitem/all')
      .then((response) => {
        setData(response.data);
      })
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/menuitem/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="MenuItems">
      <h2>Menu Items</h2>
      <table>
        <thead>
          <tr>
            <th>FoodName</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.foodName}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.status}</td>
              <td>{item.action}</td>
              <td>
                <button type='button' onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuItems;