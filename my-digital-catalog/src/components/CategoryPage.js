import React from 'react';
import ProductCard from './ProductCard';
import { products } from './Homepage';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { categoryName } = useParams();
  const filteredProducts = products.filter(product => product.category === categoryName);

  return (
    <div>
      <h2>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;