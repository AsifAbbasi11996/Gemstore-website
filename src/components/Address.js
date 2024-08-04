import React, { useState, useEffect } from "react";
import "../assets/css/Address.css";
import { useNavigate } from "react-router-dom";

const Address = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const navigate = useNavigate();

  const handleOtpChange = (event) => {
    const { value } = event.target;

    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
      setOtpError("");
    } else {
      setOtpError("Please enter up to 6 digits.");
    }
  };

  const handleClick = () => {
    if (otp.length !== 6) {
      setOtpError("Please enter exactly 6 digits.");
      return;
    }

    console.log("OTP:", otp);
    navigate("/address2");
  };
  return (
    <>
      <div className="address_container">
        <div className="nav">
          <div className="logo">
            <h2>Gemsmantra</h2>
          </div>
        </div>

        <div className="address">
          <div className="left">
            <div className="top">
              <p className="blue">
                Summary
                <span>
                  <i className="ri-checkbox-circle-fill blue"></i>
                </span>
              </p>
              <p className="blue">
                Address
                <span>
                  <i className="ri-checkbox-circle-fill blue"></i>
                </span>
              </p>
              <p>
                Payment
                <span>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
              </p>
            </div>
            <div className="otp_container">
              <div className="verify_number">
                <i class="ri-verified-badge-line"></i>
                <p>Verify Mobile Number</p>
              </div>

              <div className="text_message">
                <p>A text message with an OTP has been sent to</p>
                <p className="number">+9165464864</p>
              </div>

              <div className="otp_input">
                <input
                  type="text"
                  value={otp}
                  onChange={handleOtpChange}
                  placeholder="Enter OTP"
                />
                {otpError && <p className="error-message">{otpError}</p>}
              </div>

              <div className="resend_otp">
                <p>Resend OTP</p>
              </div>

              <button onClick={handleClick}>Continue</button>
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
export default Address;
