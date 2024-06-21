import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img
            src="https://www.visa.com/images/merchantoffers/2022-05/1653640344835.myntra1.png"
            alt="Myntra Logo"
          />
        </Link>
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
      <div className={`navbar__links ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="#">Men</Link>
        <Link to="#">Women</Link>
        <Link to="#">Kids</Link>
        <Link to="#">Beauty</Link>
      </div>
      <div className="navbar__icons">
        <span style={{ position: "relative" }}>
          <Link to="/cart" className="navbar_cart">
            <i className="fas fa-shopping-bag"></i>
            {cartCount > 0 && (
              <span className="navbar__cart-count">{cartCount}</span>
            )}
          </Link>
        </span>
        <button className="navbar__hamburger" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
