import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Gemstone.css";
import Filter from "./Filter";
import gifts_img from "../assets/images/rakhi.webp";

const apiLinks = [
  "https://gemstore-backend.onrender.com/api/gesmtone/all",
  "https://gemstore-backend.onrender.com/api/rudraksha/all",
  "https://gemstore-backend.onrender.com/api/baracelets/all",
  "https://gemstore-backend.onrender.com/api/trees/all",
  "https://gemstore-backend.onrender.com/api/rakhi/all",
];

const getRandomProducts = (products, count) => {
  const shuffled = products.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Gifts = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProducts = async () => {
      try {
        const responses = await Promise.all(apiLinks.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.json()));
        
        // Combine all products
        const allProducts = data.flat();
        
        // Get 2 or 3 random products from combined list
        const randomProducts = getRandomProducts(allProducts, 3); // Adjust number as needed
        setProducts(randomProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="gemstone_container">
        <div className="img">
          <img src={gifts_img} alt="Gifts" />
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
            {products.length > 0 ? (
              products.map((product, index) => (
                <Link key={index} to={`/product/${product._id}`}>
                  <div className="card">
                    <img src={product.Images[0]} alt={product.Name} />
                    <div className="details">
                      <p>{product.Name}</p>
                      <p>Price: {product.SP}</p>
                      <Link to="/addtocart">
                        <button>Add to cart</button>
                      </Link>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gifts;
