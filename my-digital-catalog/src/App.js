import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage, { products } from './components/Homepage';
import ProductDetails from './components/ProductDetails';
import CategoryPage from './components/CategoryPage';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} products={products} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;