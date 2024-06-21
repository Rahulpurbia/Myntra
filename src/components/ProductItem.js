import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ({ product }) => (
  <div className="product-card">
    <Link to={`/product/${product.id}`} className="product-link">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details-desc">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
      </div>
    </Link>
  </div>
);

export default ProductItem;
