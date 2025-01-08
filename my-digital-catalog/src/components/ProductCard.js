import React, { useState } from 'react';
import placeholder from '../assets/placeholder.jpg';

function ProductCard({ product }) {
  const [imageSrc, setImageSrc] = useState(product.image);

  const handleError = () => {
    setImageSrc(placeholder);
  };

  return (
    <div className="product-card">
      <img 
        src={imageSrc} 
        alt={product.name} 
        onError={handleError} 
      />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductCard;
