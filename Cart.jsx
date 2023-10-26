import React from 'react';

const Cart = ({ cart }) => (
  <div className="cart">
    <h2>Shopping Cart</h2>
    {cart.map(item => (
      <div key={item.id} className="cart-item">
        <h3>{item.name}</h3>
        <img src={item.thumbnail} alt={item.name} />
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    ))}
  </div>
);

export default Cart;
