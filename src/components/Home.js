import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Home.css";
import VideoCart from "./VideoCart";
import FAQ from "./FAQ";
import gemstone from "../assets/images/gemstone.webp";
import rudraksh from "../assets/images/rudraksh.webp";
import bracelet from "../assets/images/bracelet.avif";
import trees from "../assets/images/trees.webp";
import rakhi from "../assets/images/rakhi2.webp";
import c_img1 from "../assets/images/c_img1.webp";
import c_img2 from "../assets/images/c_img2.jpg";
import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/rakhi.webp";
import img4 from "../assets/images/slider_img3.webp";
import icons_gems from "../assets/images/icons_gems.webp";

const Home = () => {
  const [rudrakshaData, setRudrakshaData] = useState([]);
  const [braceletData, setBraceletData] = useState([]);
  const [maxLength, setMaxLength] = useState(30); 

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

  useEffect(() => {
    const fetchRudrakshaData = async () => {
      try {
        const res = await fetch('https://gemstore-backend.onrender.com/api/rudraksha/all', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const resData = await res.json();
        setRudrakshaData(resData);
      } catch (error) {
        console.error('Error fetching Rudraksha data:', error);
      }
    };

    fetchRudrakshaData();

    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setMaxLength(30);
      } else {
        setMaxLength(20);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };
  
  useEffect(() => {
    const fetchBraceletData = async () => {
      try {
        const res = await fetch('https://gemstore-backend.onrender.com/api/bracelets/all', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const resData = await res.json();
        setBraceletData(resData);
      } catch (error) {
        console.error('Error fetching Bracelet data:', error);
      }
    };

    fetchBraceletData();
    
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setMaxLength(30);
      } else {
        setMaxLength(20);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
            <Link to="/rakhi">
              <div className="rakhi border">
                <img src={rakhi} />
                <p>Rakhi</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="content2">
          <h1>100% NATURAL HIMALAYAN RUDRAKSHA</h1>
          <div className="cards">
            {rudrakshaData.map((item, index) => (
              <Link to={`/rudraksha/product/${item._id}`} key={item._id} state={{product : item}}>
                <div className="card">
                  <div className="img">
                    <img src={item.Images[0]} alt={item.Name} />
                  </div>
                  <div className="details">
                  <p>{truncateText(item.Name, maxLength)}</p>
                    <p>
                       ₹ {item.SP} <del>₹ {item.Mrp}</del>
                    </p>
                    <p>
                      {Array.from({ length: 5 }, (_, i) => (
                        <i key={i} className="ri-star-s-fill"></i>
                      ))}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link to='/rudraksha'>
            <button>VIEW ALL</button>
          </Link>
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
            {braceletData.map((item, index) => (
              <Link to={`/bracelets/product/${item._id}`} key={item._id} state={{ product: item }}>
                <div className="card">
                  <div className="img">
                    <img src={item.Images[0]} alt={item.Name} />
                  </div>
                  <div className="details">
                  <p>{truncateText(item.Name, maxLength)}</p>
                    <p>
                      ₹ {item.SP} <del>₹ {item.Mrp}</del>
                    </p>
                    <p>
                      {Array.from({ length: 5 }, (_, i) => (
                        <i key={i} className="ri-star-s-fill"></i>
                      ))}
                    </p>
                   
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link to='/bracelets'>
            <button>VIEW ALL</button>
          </Link>
        </div>

        <VideoCart />

        <div className="collection">
          <div className="images">
            <img src={c_img1} alt="" />
            <img src={c_img2} alt="" />
          </div>
          <div className="text">
            <h2>introducing</h2>
            <h3>healing cyrstal bracelets</h3>
            <p className="para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              natus dicta quam animi velit corrupti sunt voluptate excepturi
              cumque a?
            </p>
            <Link to='/gifts'>
              <button>check out collection</button>
            </Link>
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
