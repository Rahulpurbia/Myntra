import React from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { addToast } from "../redux/actions/toastActions";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(addToast("Added Product To Cart!"));
  };

  return (
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
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
