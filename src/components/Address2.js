import React from "react";
import "../assets/css/Address2.css";
import { useLocation, useNavigate } from "react-router-dom";

const Address2 = () => {
    const location = useLocation();
    const { state } = location;
    const { product, phoneNumber} = state || {};
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/payment');
    };

    return (
        <>
            <div className="address2_container">
                <div className="nav">
                    <div className="logo">
                        <h2>Gemsmantra</h2>
                    </div>
                </div>
                <div className="address2">
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

                        <div className="delivery_address">
                            <i className="ri-map-pin-line"></i>
                            <p>Delivery Address</p>
                        </div>

                        <div className="input">
                            <input type="text" placeholder="Full Name" />
                            <input type="tel" value={phoneNumber} placeholder="Phone Number" />
                            <input type="text" placeholder="Pincode*" />
                            <input type="text" placeholder="State*" />
                            <input type="text" placeholder="City*" />
                            <input type="text" placeholder="House Number, Apartment*" />
                            <input type="text" placeholder="Area, Colony, Street, Sector*" />

                            <div className="checkbox">
                                <input type="checkbox" />
                                <label>Save Address</label>
                            </div>

                            <div className="places">
                                <p>
                                    <span><i className="ri-home-8-line"></i></span>
                                    <span>Home</span>
                                </p>
                                <p>
                                    <span><i className="ri-briefcase-line"></i></span>
                                    <span>Office</span>
                                </p>
                                <p>
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <span>Others</span>
                                </p>
                            </div>
                        </div>

                        <button onClick={handleClick}>Continue</button>
                    </div>

                    <div className="right">
                        <h2>Order Summary</h2>

                        <div className="product">
                            {product?.Images && <img src={product.Images[0]} alt="Product" />}
                            <p>{product?.Name}</p>
                        </div>

                        <div className="price">
                            <p>Price <span>(incl. taxes)</span></p>
                            <p>₹{product?.SP}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Address2;
