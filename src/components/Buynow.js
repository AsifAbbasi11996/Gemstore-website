import React, { useState, useEffect } from "react";
import "../assets/css/Buynow.css";
import { useNavigate } from "react-router-dom";

const Buynow = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate()

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

    navigate('/address')
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
  };


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
                  placeholder="Enter your phone number" required
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
                  placeholder="Enter your email" required
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
              <img src="" alt="Product" />
              <p>Product Name</p>
            </div>

            <div className="price">
              <p>Price (incl. taxes)</p>
              <p>₹5000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buynow
