import React from 'react';

const Product = ({ product, onAddToCart }) => (
  <div className="product">
    <h2>{product.name}</h2>
    <img src={product.thumbnail} alt={product.name} />
    <p>Price: ${product.price}</p>
    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    
  </div>
  
);

export default Product;
