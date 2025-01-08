import React from 'react';

function Checkout({ cart }) {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - {item.price}</li>
          ))}
        </ul>
      )}
      <button className="checkout-btn">Confirm Purchase</button>
    </div>
  );
}

export default Checkout;