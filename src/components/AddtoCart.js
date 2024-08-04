import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/AddtoCart.css";

const AddtoCart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="addtocart_main_container">
        <h2>CART</h2>
        <div className="addtocart_container">
          <div className="product">
            <div className="img"></div>
            <div className="details">
              <p>7 mukhi rudraksha</p>
              <p>Goddess Mahalaxmi</p>
              <p>Price</p>
              <div className="buttons">
                <Link to="/buynow">
                  <button>Buy Now</button>
                </Link>
                <Link to="">
                  <button>Remove</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="quantity">
            <p>Quantity</p>
            <div className="buttons">
              <button onClick={handleDecrement}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
          </div>

          <div className="totalamount">
            <p>Total Amount</p>
            <div className="price">
              <p>Price</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddtoCart;
