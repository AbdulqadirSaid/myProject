import React from 'react';

const OrderForm = () => {
  return (
    <div className="order-form">
      <h2>Order Form</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="foodName">Food Name:</label></td>
              <td><input type="text" id="foodName" name="foodName" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="quantity">Quantity:</label></td>
              <td><input type="number" id="quantity" name="quantity" min="1" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="deliveryDate">Delivery Date:</label></td>
              <td><input type="date" id="deliveryDate" name="deliveryDate" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="deliveryTime">Delivery Time:</label></td>
              <td><input type="time" id="deliveryTime" name="deliveryTime" required /></td>
            </tr>
            <tr>
              <td colSpan="2" className="submit-row">
                <button type="submit">Submit Order</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default OrderForm;
