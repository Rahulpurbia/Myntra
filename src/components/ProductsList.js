import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsRequest } from "../redux/actions/productsActions";
import ProductItem from "./ProductItem";
import "./ProductsList.css";

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const [page, setPage] = useState(1);

  const observer = useRef();
  const lastProductElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    dispatch(fetchProductsRequest(page));
  }, [dispatch, page]);

  return (
    <div className="products-list">
      {error && <p>{error}</p>}
      {products.map((product, index) => (
        <div
          ref={products.length === index + 1 ? lastProductElementRef : null}
          key={`${product.id}-${index}`}
        >
          <ProductItem product={product} />
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ProductsList;
