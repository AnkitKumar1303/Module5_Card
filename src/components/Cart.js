
import React from 'react';
import './Cart.css';
const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No Product added to the cart</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.product.id}>
              {item.product.name} - Quantity: {item.quantity} - Total: ${item.quantity * item.product.price}
              <button onClick={() => removeFromCart(item.product)}>-</button>
            </li>
          ))}
        </ul>
        
      )}
      
    </div>
  );
};

export default Cart;
