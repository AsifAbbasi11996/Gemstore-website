import React from "react";
import "../assets/css/VideoCart.css";
import v1 from "../assets/images/v1.mp4";
import v2 from "../assets/images/v2.mp4";
import v3 from "../assets/images/v3.mp4";
import v4 from "../assets/images/v4.mp4";
import v5 from "../assets/images/v5.mp4";
import i1 from "../assets/images/i1.webp";
import i2 from "../assets/images/i2.webp";
import i3 from "../assets/images/i3.webp";
import i4 from "../assets/images/i4.webp";
import i5 from "../assets/images/i5.webp";
import { Link } from "react-router-dom";

const VideoCart = () => {
  return (
    <>
      <div className="video-card_container">
        <div className="video-cards">
          <div className="card">
            <video src={v1} autoPlay muted loop></video>
            <div className="img_text">
              <img src={i1} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button>
              <Link to="/addtocart">
                <span>add to cart</span>
              </Link>
              <span className="icon">
                <i class="ri-arrow-drop-down-fill"></i>
              </span>
            </button>
          </div>

          <div className="card">
            <video src={v2} autoPlay muted loop></video>
            <div className="img_text">
              <img src={i2} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button>
              <Link to="/addtocart">
                <span>add to cart</span>
              </Link>
              <span className="icon">
                <i class="ri-arrow-drop-down-fill"></i>
              </span>
            </button>
          </div>
          <div className="card">
            <video src={v3} autoPlay muted loop></video>
            <div className="img_text">
              <img src={i3} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button>
              <Link to="/addtocart">
                <span>add to cart</span>
              </Link>
              <span className="icon">
                <i class="ri-arrow-drop-down-fill"></i>
              </span>
            </button>
          </div>
          <div className="card">
            <video src={v4} autoPlay muted loop></video>
            <div className="img_text">
              <img src={i4} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button>
              <Link to="/addtocart">
                <span>add to cart</span>
              </Link>
              <span className="icon">
                <i class="ri-arrow-drop-down-fill"></i>
              </span>
            </button>
          </div>
          <div className="card">
            <video src={v5} autoPlay muted loop></video>
            <div className="img_text">
              <img src={i5} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button>
              <Link to="/addtocart">
                <span>add to cart</span>
              </Link>
              <span className="icon">
                <i class="ri-arrow-drop-down-fill"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCart;
