import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateCartQuantity } from '../redux/actions/cartActions';
import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity > 0) {
      dispatch(updateCartQuantity(productId, quantity));
    }
  };

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <Link to={`/product/${item.id}`} className="cart-item__link">
              <div className="cart-item__image">
                <img src={item.image} alt={item.title} />
              </div>
            </Link>
            <div className="cart-item__details">
              <Link to={`/product/${item.id}`} className="cart-item__title">{item.title}</Link>
              <p className="cart-item__price">${item.price}</p>
              <div className="cart-item__quantity">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
              <button
                className="cart-item__remove"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h2>
        <button className="cart-summary__checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
