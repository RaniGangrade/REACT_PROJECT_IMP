import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Invalid API response:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="products">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
