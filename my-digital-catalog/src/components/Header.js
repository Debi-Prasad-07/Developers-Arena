import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className="header">
        <h1>Mobile Shopping Platform </h1>
      </div>
      <div className="categories">
        <Link to="/">Home</Link>
        <Link to="/category/smartphones">Smartphones</Link>
        <Link to="/category/tablets">Tablets</Link>
        <Link to="/category/wearables">Wearables</Link>
        <Link to="/category/accessories">Accessories</Link>
      </div>
      <div className="sale-banner">Big Sale! Up to 50% Off</div>
    </div>
  );
}

export default Header;