import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Header.css';  // Import the CSS file

const Header = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Link to="/cart" className="cart-icon">Cart ({totalItems})</Link>
    </header>
  );
};

export default Header;