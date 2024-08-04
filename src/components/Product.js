import React, { useEffect, useState } from "react";
import "../assets/css/Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState("img1");

  // Array of image paths or URLs
  const images = {
    img1: "path/to/image1.jpg", // Replace with the actual path or URL
    img2: "path/to/image2.jpg",
    img3: "path/to/image3.jpg",
  };

  // Handle image selection
  const handleImageClick = (imageKey) => {
    setSelectedImage(images[imageKey]);
  };

  return (
    <>
      <div className="product_container">
        <div className="product">
          <div className="images">
            <div className="sm_images">
              <div className="img" onClick={() => handleImageClick("img1")}>
                img1
              </div>
              <div className="img" onClick={() => handleImageClick("img2")}>
                img2
              </div>
              <div className="img" onClick={() => handleImageClick("img3")}>
                img3
              </div>
            </div>
            <div className="lg_image">
              <img src={selectedImage} alt="Selected" />
            </div>
          </div>
          <div className="details">
            <h2>7 mukhi rudraksha</h2>
            <h2>
              <li>PURPOSE :</li>
            </h2>
            <p>
              Attracts wealth, prosperity, and abundance. Offers protection
              against negative influences and promotes spiritual growth.
            </p>
            <h2>
              <li>GUARANTEE :</li>
            </h2>
            <p>100% original, Lab Certified, Authentic and Natural</p>
            <h2>
              <li>DIVINE CONNECTION :</li>
            </h2>
            <p>Goddess Mahalaxmi</p>
            <div className="buttons">
              <Link to="/addtocart">
                <button>add to cart</button>
              </Link>
              <Link to="/buynow">
                <button>buy now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
