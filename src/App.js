import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
);

export default App;
