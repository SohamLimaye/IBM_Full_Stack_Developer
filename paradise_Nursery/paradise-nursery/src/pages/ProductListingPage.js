import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import fiddleLeafFig from '../assets/images/fiddle_leaf_fig.jpeg';
import snakePlant from '../assets/images/snake_plant.jpeg';
import aloeVera from '../assets/images/aloe_vera.jpeg';
import jadePlant from '../assets/images/jade_plant.jpeg';
import peaceLily from '../assets/images/peace_lily.jpeg';
import spiderPlant from '../assets/images/spider_plant.jpeg';

const products = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 50, thumbnail: fiddleLeafFig, category: 'low light' },
  { id: 2, name: 'Snake Plant', price: 30, thumbnail: snakePlant, category: 'low light' },
  { id: 3, name: 'Aloe Vera', price: 20, thumbnail: aloeVera, category: 'succulents' },
  { id: 4, name: 'Jade Plant', price: 25, thumbnail: jadePlant, category: 'succulents' },
  { id: 5, name: 'Peace Lily', price: 35, thumbnail: peaceLily, category: 'air purifying' },
  { id: 6, name: 'Spider Plant', price: 15, thumbnail: spiderPlant, category: 'air purifying' },
];

const ProductListingPage = () => {
  const { addToCart } = useContext(CartContext);

  const categories = ['low light', 'air purifying', 'succulents'];

  return (
    <div>
      <h2>Products</h2>
      {categories.map(category => (
        <div key={category}>
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <div className="product-list">
            {products
              .filter(product => product.category === category)
              .map(product => (
                <div key={product.id} className="product-item">
                  <img src={product.thumbnail} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;