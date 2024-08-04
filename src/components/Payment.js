import React, { useEffect } from "react";
import "../assets/css/Payment.css";

const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="payment_container">
        <div className="nav">
          <div className="logo">
            <h2>Gemsmantra</h2>
          </div>
        </div>

        <div className="payment">
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
              <p className="blue">
                Payment
                <span>
                  <i className="ri-checkbox-circle-fill blue"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
