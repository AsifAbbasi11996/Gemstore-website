import React, { useState, useEffect } from "react";
import "../assets/css/Buynow.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const Buynow = () => {
  const location = useLocation();
  const { productId } = location.state || {};
  const [product, setProduct] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  // List of API endpoints to search for the product
  const apiLinks = [
    'https://gemstore-backend.onrender.com/api/gemstone/all',
    'https://gemstore-backend.onrender.com/api/rudraksha/all',
    'https://gemstore-backend.onrender.com/api/bracelets/all',
    'https://gemstore-backend.onrender.com/api/trees/all',
    'https://gemstore-backend.onrender.com/api/rakhi/all'
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        try {
          const requests = apiLinks.map(link => axios.get(link));
          const responses = await Promise.all(requests);

          // Flatten the responses and find the product
          let foundProduct = null;
          for (const response of responses) {
            const products = response.data;
            foundProduct = products.find(p => p._id === productId);
            if (foundProduct) break; // Stop searching if the product is found
          }

          if (foundProduct) {
            setProduct(foundProduct);
          } else {
            console.warn('Product not found');
            // Handle the case where the product is not found
          }
        } catch (error) {
          console.error('Error fetching product:', error);
          // Handle the error appropriately
        }
      }
    };
    fetchProduct();
  }, [productId]);

  const handlePhoneNumberChange = (event) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
      setPhoneNumberError("");
    } else {
      setPhoneNumberError("Please enter numbers only.");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (phoneNumber.trim() === "") {
      setPhoneNumberError("Phone number is required.");
      return;
    }
    if (email.trim() === "") {
      setEmailError("Email is required.");
      return;
    }

    // Pass the product and user details to the Address page
    navigate(`/address/${productId}`, { state: { product, phoneNumber, email } });
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <div className="summary_container">
        <div className="nav">
          <div className="logo">
            <h2>Gemstore</h2>
          </div>
        </div>
        <div className="summary">
          <div className="left">
            <div className="top">
              <p className="blue">
                Summary
                <span>
                  <i className="ri-checkbox-circle-fill blue"></i>
                </span>
              </p>
              <p>
                Address
                <span>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
              </p>
              <p>
                Payment
                <span>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
              </p>
            </div>

            <div className="contact_details">
              <div className="user">
                <i className="ri-user-line"></i>
                <p>Contact Details</p>
              </div>
              <div className="input">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Enter your phone number"
                  required
                />
                {phoneNumberError && (
                  <p className="error-message">{phoneNumberError}</p>
                )}
              </div>
              <div className="input">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  required
                />
                {emailError && (
                  <p className="error-message">{emailError}</p>
                )}
              </div>
              <button onClick={handleSubmit}>Continue</button>
            </div>
          </div>

          <div className="right">
            <h2>Order Summary</h2>

            <div className="product">
              {product.Images && <img src={product.Images[0]} alt="Product" />}
              <p>{product.Name}</p>
            </div>

            <div className="price">
              <p>Price <span>(incl. taxes)</span> </p>
              <p>₹ {product.SP}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buynow;
