import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import axios from "axios";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <div className="product-details__image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details__info">
        <h1 className="product-details__title">{product.title}</h1>
        <p className="product-details__price">${product.price}</p>
        <p className="product-details__description">
          Myntra is one of India's leading e-commerce platforms specializing in
          fashion and lifestyle products. Founded in 2007, Myntra offers an
          extensive range of clothing, footwear, accessories, and beauty
          products for men, women, and children. It collaborates with numerous
          global and Indian brands, providing a mix of high-end and affordable
          fashion. Myntra is renowned for its exclusive launches,
          collaborations, and diverse collections. The platform ensures a
          seamless shopping experience with features like easy returns, exchange
          policies, and multiple payment options. Frequent sales, discounts, and
          personalized recommendations further enhance its appeal, making Myntra
          a preferred choice for online shoppers across India.
          {product.description}
        </p>
        <button
          className="product-details__add-to-cart"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
