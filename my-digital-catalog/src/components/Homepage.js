import React, { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';

export const products = [
  { id: 1, name: 'iPhone 13', price: '$999', image: require('../assets/iphone13_resized.jpg'), category: 'smartphones' },
  { id: 2, name: 'Samsung Galaxy S22', price: '$899', image: require('../assets/s22_resized.jpg'), category: 'smartphones' },
  { id: 3, name: 'Apple Watch', price: '$399', image: require('../assets/apple_watch_resized.jpg'), category: 'wearables' },
  { id: 4, name: 'Sony Headphones', price: '$199', image: require('../assets/sony_headphones_resized.jpg'), category: 'accessories' },
  { id: 5, name: 'Fitbit Watch', price: '$299', image: require('../assets/fitbit_watch.jpg'), category: 'wearables' },
  { id: 6, name: 'Apple AirPods', price: '$159', image: require('../assets/airpods.jpg'), category: 'accessories' },
  { id: 7, name: 'iPad', price: '$499', image: require('../assets/ipad_resized.jpg'), category: 'tablets' }
];

function Homepage() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1, behavior: 'smooth' });
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Featured Products</h2>
      <div ref={scrollRef} className="product-grid">
        {products.concat(products).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;