import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Home.css";
import VideoCart from "./VideoCart";
import FAQ from "./FAQ";
import gemstone from "../assets/images/gemstone.webp";
import rudraksh from "../assets/images/rudraksh.webp";
import bracelet from "../assets/images/bracelet.avif";
import trees from "../assets/images/trees.webp";
import c_img1 from "../assets/images/c_img1.webp";
import c_img2 from "../assets/images/c_img2.jpg";
import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/rakhi.webp";
import img4 from "../assets/images/slider_img3.webp";
import icons_gems from "../assets/images/icons_gems.webp";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3, img4];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); 

   
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="home_container">
      <div className="slider-container">
      <div className="slider">
        <button className="prev" onClick={prevSlide}>❮</button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
        <button className="next" onClick={nextSlide}>❯</button>
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>

        <div className="content">
          <h1>Find your product</h1>
          <div className="gems">
            <Link to="/gemstone">
              <div className="gem border">
                <img src={gemstone} />
                <p>Gemstones</p>
              </div>
            </Link>
            <Link to="/rudraksha">
              <div className="rudraksh border">
                <img src={rudraksh} />
                <p>Rudraksha</p>
              </div>
            </Link>
            <Link to="/bracelets">
              <div className="bracelet border">
                <img src={bracelet} />
                <p>Bracelets</p>
              </div>
            </Link>
            <Link to="/trees">
              <div className="trees border">
                <img src={trees} />
                <p>Trees</p>
              </div>
            </Link>
            <Link to="/gifts">
              <div className="gem border">
                <img src={gemstone} />
                <p>Gifts</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="content2">
          <h1>100% NATURAL HIMALAYAN RUDRAKSHA</h1>
          <div className="cards">
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
          <button>VIEW ALL</button>
        </div>

        <marquee behavior="" direction="">
          <p>
            Get the Blessing of Lord Shiva with power of Rudraksha
            <span>Get the Blessing of Lord Shiva with power of Rudraksha</span>
          </p>
        </marquee>

        <div className="content3">
          <h1>Bracelets</h1>
          <div className="cards">
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
          <button>VIEW ALL</button>
        </div>

        <VideoCart />

        <div className="collection">
          <div className="images">
            <img src={c_img1} alt="" />
            <img src={c_img2} alt="" />
          </div>
          <div className="text">
            <p>introducing</p>
            <p>healing cyrstal bracelets</p>
            <p className="para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              natus dicta quam animi velit corrupti sunt voluptate excepturi
              cumque a?
            </p>
            <button>check out collection</button>
          </div>
        </div>

        <FAQ />

        <div className="icons_gems">
          <img src={icons_gems} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
