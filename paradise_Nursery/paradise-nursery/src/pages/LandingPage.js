import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Paradise Nursery</h1>
      <p>Welcome to Paradise Nursery, your one-stop shop for houseplants.</p>
      <Link to="/products"> 
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;