import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingCartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <div>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <h3>Total: ${totalCost}</h3>
      <button>Continue Shopping</button>
      <button>Checkout</button>
    </div>
  );
};

export default ShoppingCartPage;