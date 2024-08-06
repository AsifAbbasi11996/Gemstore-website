import React, { useEffect, useState } from "react";
import "../assets/css/Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="product_container">
        <div className="product">
          <div className="images">
            <div className="sm_images">
              <div className="img">
                img1
              </div>
              <div className="img">
                img2
              </div>
              <div className="img">
                img3
              </div>
            </div>
            <div className="lg_image">
              <img src="" alt="Selected" />
            </div>
          </div>
          <div className="details">
            <h2>Product Name</h2>
            <p>
              <span className="sp">SP</span>
              <span className="mrp"> <del>MRP</del> </span>
            </p>

            <div className="qty-buttons">
              <button onClick={handleDecrement}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>

            <div className="buttons">
              <Link to="/addtocart">
                <button>add to cart</button>
              </Link>
              <Link to="/buynow">
                <button>buy now</button>
              </Link>
            </div>

            <div className="about-product">
              About product
            </div>
          </div>
        </div>

        <hr />

        <div className="related_products">
          <h2>Related Products</h2>
          <div className="cards">
            <Link to="/product">
              <div className="card">
                <div className="img">
                  <img src="https://gemsmantra.com/cdn/shop/files/1_1875e830-8d16-4503-a226-79c03b0e9b11.jpg?v=1707119124&width=300" />
                </div>
                <div className="details">
                  <p>7 mukhi rudraksha</p>
                  <p>
                    <span>from rs. 1,540.00 </span>
                    <span>
                      <del>rs. 2,200</del>
                    </span>
                  </p>
                  <p>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                  </p>
                  <Link to='/addtocart'>
                    <button>add to cart</button>
                  </Link>
                </div>
              </div>
            </Link>
            <Link to="/product">
              <div className="card">
                <div className="img">
                  <img src="https://gemsmantra.com/cdn/shop/files/1_c4216d1c-32ad-4f24-9ae9-609884e67b90.jpg?v=1707119035&width=200" />
                </div>
                <div className="details">
                  <p>7 mukhi rudraksha</p>
                  <p>
                    from rs. 1,540.00 <del>rs. 2,200</del>
                  </p>
                  <p>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                  </p>
                  <Link to='/addtocart'>
                    <button>add to cart</button>
                  </Link>
                </div>
              </div>
            </Link>
            <Link to="/product">
              <div className="card">
                <div className="img">
                  <img src="https://gemsmantra.com/cdn/shop/files/1_1875e830-8d16-4503-a226-79c03b0e9b11.jpg?v=1707119124&width=300" />
                </div>
                <div className="details">
                  <p>7 mukhi rudraksha</p>
                  <p>
                    from rs. 1,540.00 <del>rs. 2,200</del>
                  </p>
                  <p>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                  </p>
                  <Link to='/addtocart'>
                    <button>add to cart</button>
                  </Link>
                </div>
              </div>
            </Link>
            <Link to="/product">
              <div className="card">
                <div className="img">
                  <img src="https://gemsmantra.com/cdn/shop/files/1_1875e830-8d16-4503-a226-79c03b0e9b11.jpg?v=1707119124&width=300" />
                </div>
                <div className="details">
                  <p>7 mukhi rudraksha</p>
                  <p>
                    from rs. 1,540.00 <del>rs. 2,200</del>
                  </p>
                  <p>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                  </p>
                  <Link to='/addtocart'>
                    <button>add to cart</button>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
