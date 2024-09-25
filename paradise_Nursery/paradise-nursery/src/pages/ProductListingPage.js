import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const products = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 50, thumbnail: 'path/to/image1.jpg' },
  { id: 2, name: 'Snake Plant', price: 30, thumbnail: 'path/to/image2.jpg' },
  // Add more products here
];

const ProductListingPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.thumbnail} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;