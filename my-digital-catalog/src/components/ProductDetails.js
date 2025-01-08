import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './Homepage';

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.price}</p>
      <p>Category: {product.category}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
export default ProductDetails;