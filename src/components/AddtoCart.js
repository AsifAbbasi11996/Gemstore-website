import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../assets/css/AddtoCart.css";

const AddtoCart = () => {
  const location = useLocation();
  const { productId } = location.state || {};
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [cartEmpty, setCartEmpty] = useState(false);
  const [maxLength, setMaxLength] = useState(30);

  const apiEndpoints = [
    'https://gemstore-backend.onrender.com/api/gemstone/all',
    'https://gemstore-backend.onrender.com/api/rudraksha/all',
    'https://gemstore-backend.onrender.com/api/bracelets/all',
    'https://gemstore-backend.onrender.com/api/trees/all',
    'https://gemstore-backend.onrender.com/api/rakhi/all',
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchPromises = apiEndpoints.map(url =>
          fetch(url).then(response => response.json())
        );

        const allProducts = await Promise.all(fetchPromises);
        const products = allProducts.flat();

        const foundProduct = products.find(p => p._id === productId);
        if (!foundProduct) {
          setCartEmpty(true);
        } else {
          setProduct(foundProduct);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setMaxLength(30);
      } else {
        setMaxLength(20);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemove = () => {
    // Clear the product state and mark cart as empty
    setProduct(null);
    setCartEmpty(true);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="addtocart_main_container">
        {cartEmpty ? (
          <div className="empty-cart-message">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <div className="addtocart_container">
            <div className="product">
              <div className="img">
                <img src={product.Images[0]} alt={product.Name} />
              </div>
              <div className="details">
                <p>{truncateText(product.Name, maxLength)}</p>
                <p>Price : ₹ {product.Mrp}</p>
                <div className="buttons">
                  <Link to={`/buynow/${productId}`} state={{ productId: product._id }}>
                    <button>Buy Now</button>
                  </Link>
                  <button onClick={handleRemove}>
                    Remove
                  </button>
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
                <p>₹ {product.Mrp * quantity}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddtoCart;
