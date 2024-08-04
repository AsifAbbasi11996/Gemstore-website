import React, { useState } from "react";
import "../assets/css/Filter.css";

const Filter = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (e) => {
    const value = e.target.value;

    if (!isNaN(value) || value === "") {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;

    if (!isNaN(value) || value === "") {
      setMaxPrice(value);
    }
  };

  const applyFilters = () => {
    console.log("Min Price:", minPrice);
    console.log("Max Price:", maxPrice);
  };

  return (
    <>
      <div className="filter_container">
        <form onSubmit={applyFilters}>
          <div className="sortby">
            <p>SORT BY</p>
            <p>Price</p>
            <div className="price">
              <input
                type="radio"
                name="price"
                id="hightolow"
                value="hightolow"
              />
              <label htmlFor="hightolow">High to Low</label>
            </div>
            <div className="price">
              <input
                type="radio"
                name="price"
                id="lowtohigh"
                value="lowtohigh"
              />
              <label htmlFor="lowtohigh">Low to High</label>
            </div>
            <div className="price-range">
              <label htmlFor="minPrice">Price Range</label>
              <br />
              <input
                type="text"
                id="minPrice"
                name="minPrice"
                value={minPrice}
                onChange={handleMinPriceChange}
                placeholder="Min Price"
              />
              <p>to</p>
              <input
                type="text"
                id="maxPrice"
                name="maxPrice"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                placeholder="Max Price"
              />
            </div>
            <p>Alphabetically</p>
            <div className="alphabetically">
              <input type="radio" name="sort" id="atoz" value="atoz" />
              <label htmlFor="atoz">A to Z</label>
            </div>
            <div className="alphabetically">
              <input type="radio" name="sort" id="ztoa" value="ztoa" />
              <label htmlFor="ztoa">Z to A</label>
            </div>
          </div>
          <button type="submit">APPLY FILTERS</button>
        </form>
      </div>
    </>
  );
};

export default Filter;
