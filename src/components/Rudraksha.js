import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Gemstone.css";
import Filter from "./Filter";
import rudraksha_img from "../assets/images/slider_img3.webp";

const Rudraksha = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [maxLength, setMaxLength] = useState(30); 
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    sortOrder: ""
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
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
        setData(resData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setMaxLength(25);
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

  useEffect(() => {
    let filtered = data;

    if (filters.minPrice) {
      filtered = filtered.filter((item) => item.Mrp >= filters.minPrice);
    }
    
    if (filters.maxPrice) {
      filtered = filtered.filter((item) => item.Mrp <= filters.maxPrice);
    }

    if (filters.sortOrder) {
      filtered = filtered.sort((a, b) => {
        if (filters.sortOrder === "lowtohigh") {
          return a.Mrp - b.Mrp;
        } else if (filters.sortOrder === "hightolow") {
          return b.Mrp - a.Mrp;
        } else if (filters.sortOrder === "atoz") {
          return a.Name.localeCompare(b.Name);
        } else if (filters.sortOrder === "ztoa") {
          return b.Name.localeCompare(a.Name);
        }
        return 0;
      });
    }

    setFilteredData(filtered);
  }, [filters, data]);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const handleApplyFilters = (filterCriteria) => {
    setFilters({
      minPrice: filterCriteria.minPrice,
      maxPrice: filterCriteria.maxPrice,
      sortOrder: filterCriteria.sortOrder
    });
    handleClose(); // Optionally close the filter panel
  };

  return (
    <>
      <div className="gemstone_container">
        <div className="img">
          <img src={rudraksha_img} />
        </div>

        <div className="product_container">
          <button className="filterBtn" onClick={handleClick}>
            Filter
            <span>
              <i className="ri-arrow-right-s-line"></i>
            </span>
          </button>
          <div className={`filter ${isOpen ? "active" : ""}`}>
            <Filter onApplyFilters={handleApplyFilters}/>
            <button className="closeBtn" onClick={handleClose}>
              <span>
                <i className="ri-close-line"></i>
              </span>
            </button>
          </div>
          <div className="products">
            {filteredData.map((res) => (
              <Link to={`/rudraksha/product/${res._id}`} state={{ product: res }} key={res._id}>
                <div className="card">
                  <img src={res.Images[0]} alt={res.Name} />
                  <div className="details">
                    <p className="name">{truncateText(res.Name, maxLength)}</p>
                    <p><span className="sp">₹{res.SP}</span> <span className="mrp"> <del>₹{res.Mrp}</del> </span> </p>
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

export default Rudraksha;
