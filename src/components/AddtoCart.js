import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../assets/css/AddtoCart.css";

const AddtoCart = () => {
  const location = useLocation();
  const { productId } = location.state || {};
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  // Define your API endpoints here
  const apiEndpoints = [
    'https://gemstore-backend.onrender.com/api/gemstone/all',
    'https://gemstore-backend.onrender.com/api/rudraksha/all',
    'https://gemstore-backend.onrender.com/api/bracelets/all',
    'https://gemstore-backend.onrender.com/api/trees/all',
    'https://gemstore-backend.onrender.com/api/rakhi/all',
    // Add other API endpoints here
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch data from all API endpoints
        const fetchPromises = apiEndpoints.map(url =>
          fetch(url).then(response => response.json())
        );

        // Resolve all fetch promises
        const allProducts = await Promise.all(fetchPromises);

        // Flatten the array of arrays
        const products = allProducts.flat();

        // Find the product with the matching productId
        const foundProduct = products.find(p => p._id === productId);
        setProduct(foundProduct);
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

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  
  return (
    <>
      <div className="addtocart_main_container">
        <h2>CART</h2>
        <div className="addtocart_container">
          <div className="product">
            <div className="img">
              <img src={product.Images[0]} alt={product.Name} />
            </div>
            <div className="details">
              <p>{product.Name}</p>
              <p>Price : ₹ {product.Mrp}</p>
              <div className="buttons">
                <Link to="/buynow">
                  <button>Buy Now</button>
                </Link>
                <Link>
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
              <p>₹ {product.SP * quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddtoCart;
