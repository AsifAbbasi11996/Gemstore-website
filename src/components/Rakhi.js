import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Gemstone.css";
import Filter from "./Filter";
import rakhi_img from "../assets/images/rakhi.webp";

const Rakhi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://gemstore-backend.onrender.com/api/rakhi/all', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const resData = await res.json();
        setData(resData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="gemstone_container">
        <div className="img">
          <img src={rakhi_img} />
        </div>

        <div className="product_container">
          <button className="filterBtn" onClick={handleClick}>
            Filter
            <span>
              <i className="ri-arrow-right-s-line"></i>
            </span>
          </button>
          <div className={`filter ${isOpen ? "active" : ""}`}>
            <Filter />
            <button className="closeBtn" onClick={handleClose}>
              <span>
                <i className="ri-close-line"></i>
              </span>
            </button>
          </div>
          <div className="products">
            {data.map((res) => (
              <Link to={`/product/${res._id}`} key={res._id} state={{ product: res }}>
                <div className="card">
                  <img src={res.Images[0]} alt={res.Name} />
                  <div className="details">
                    <p>{res.Name}</p>
                    <p>Price: ₹{res.Mrp}</p>
                    <Link to="/addtocart">
                      <button>Add to cart</button>
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rakhi;
