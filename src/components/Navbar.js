import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../assets/css/Navbar.css";

// Debounce function
const debounce = (func, delay) => {
  let timerId;
  return (...args) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), delay);
  };
};

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const apiLinks = [
    'https://gemstore-backend.onrender.com/api/gemstone/all',
    'https://gemstore-backend.onrender.com/api/rudraksha/all',
    'https://gemstore-backend.onrender.com/api/bracelets/all',
    'https://gemstore-backend.onrender.com/api/trees/all',
    'https://gemstore-backend.onrender.com/api/rakhi/all'
  ];

  const fetchSuggestions = useCallback(
    debounce(async (term) => {
      if (!term) {
        setSuggestions([]);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const requests = apiLinks.map(link => axios.get(link));
        const responses = await Promise.all(requests);

        // Check if responses have the expected structure
        const products = responses.flatMap(response => {
          if (response.data && Array.isArray(response.data)) {
            return response.data;
          }
          console.error('Unexpected response structure:', response);
          return [];
        });

        const filtered = products
          .filter(product => 
            product.Name && product.Name.toLowerCase().includes(term.toLowerCase()) ||
            product.category && product.category.toLowerCase().includes(term.toLowerCase())
          )
          .slice(0, 10);

        setSuggestions(filtered);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load suggestions. Please try again later.');
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  useEffect(() => {
    fetchSuggestions(searchTerm);
  }, [searchTerm, fetchSuggestions]);

  const handleSearchSelect = (product) => {
    let path = '';
    
    switch (product.Category) {
      case 'gemstone':
        path = `/gemstone/product/${product._id}`;
        break;
      case 'rudraksha':
        path = `/rudraksha/product/${product._id}`;
        break;
      case 'bracelet':
        path = `/bracelets/product/${product._id}`;
        break;
      case 'trees':
        path = `/trees/product/${product._id}`;
        break;
      case 'rakhi':
        path = `/rakhi/product/${product._id}`;
        break;
      default:
        path = '/'; // Default fallback path
        break;
    }
    
    console.log('Navigating to:', path); // Log path
    navigate(path, { state: { product } });
    setSearchTerm('');
    setSuggestions([]);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="hamburger">
          <div className="open_close" onClick={handleClick}>
            {isOpen ? (
              <i className="ri-close-line"></i>
            ) : (
              <i className="ri-menu-2-line"></i>
            )}
          </div>
        </div>
        <div className="logo">
          <Link to="/">
            <h1>Gemstore</h1>
          </Link>
        </div>

       <div className={isOpen ? "nav active" : "nav"}>
           <Link
             to="/gemstone"
            onClick={() => handleNavigation("/gemstone")}
            className="nav-item"
          >
            Gemstone
            <div className="dropdowns">
              <div className="dropdown1">
                <div className="head_text">rashi ratna</div>
                <ul>
                  <li>
                    <Link>Cat' s eye/lehsuniya</Link>
                  </li>
                  <li>
                    <Link>Blue sapphire/neelam</Link>
                  </li>
                  <li>
                    <Link>Moonga</Link>
                  </li>
                  <li>
                    <Link>Opal</Link>
                  </li>
                  <li>
                    <Link>Ruby/Manik</Link>
                  </li>
                  <li>
                    <Link>Gomed</Link>
                  </li>
                  <li>
                    <Link>Pearl</Link>
                  </li>
                  <li>
                    <Link>Pukhraj/Yellow sapphire</Link>
                  </li>
                  <li>
                    <Link>Panna Emerald</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown2">
                <div className="head_text">vedic gems</div>
                <ul>
                  <li>
                    <Link>Amethyst</Link>
                  </li>
                  <li>
                    <Link>Turquoise/Firoza</Link>
                  </li>
                  <li>
                    <Link>Lolite/neeli</Link>
                  </li>
                  <li>
                    <Link>Pitambari Neelam</Link>
                  </li>
                  <li>
                    <Link>Citrine/Sunhela</Link>
                  </li>
                  <li>
                    <Link>Garnet</Link>
                  </li>
                  <li>
                    <Link>Peridot</Link>
                  </li>
                  <li>
                    <Link>Zircon/jarkar</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown3">
                <div className="head_text">other gems</div>
                <ul>
                  <li>
                    <Link>Tiger's Eye</Link>
                  </li>
                  <li>
                    <Link>Brown Jasper</Link>
                  </li>
                  <li>
                    <Link>Moonstone/Blue Sheen</Link>
                  </li>
                  <li>
                    <Link>Lapis Lazuli</Link>
                  </li>
                  <li>
                    <Link>Mother of pearl</Link>
                  </li>
                  <li>
                    <Link>South Sea Pearl</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
          <Link
            to="/rudraksha"
            onClick={() => handleNavigation("/rudraksha")}
            className="nav-item"
          >
            Rudraksha
            <div className="dropdowns dropdowns2">
              <div className="dropdown1">
                <div className="head_text">1-10 Mukhi Rudraksha</div>
                <ul>
                  <li>
                    <Link>1 Mukhi Rudraksha</Link>
                  </li>
                  <li>
                    <Link>2 Mukhi Rudraksha</Link>
                  </li>
                  <li>
                    <Link>3 Mukhi Rudraksha</Link>
                  </li>
                  <li>
                    <Link>4 Mukhi Rudraksha</Link>
                  </li>
                  <li>
                    <Link>5 Mukhi Rudraksha</Link>
                  </li>
                  <li>
                    <Link>6 Rudraksha</Link>
                  </li>
                  <li>
                    <Link>7 Mukhi Rudraksha</Link>
                  </li>
                  <li>
                    <Link>8 Mukhi Rudraksha</Link>
                  </li>
                  <li>
                    <Link>9 Mukhi Rudraksha</Link>
                  </li>
                  <li>
                    <Link>10 Mukhi Rudraksha</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown2">
                <div className="head_text">Special Rudraksha</div>
                <ul>
                  <li>
                    <Link>Gauri-Shankar Rudraksha</Link>
                  </li>
                  <li>
                    <Link>Ganesha Rudraksha</Link>
                  </li>
                  <li>
                    <Link>Garbh Gauri Rudraksha</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown3">
                <div className="head_text">Rudraskha Mala</div>
                <ul>
                  <li>
                    <Link>Dhanlakshmi Mala</Link>
                  </li>
                  <li>
                    <Link>Vidhya Vriddhi Mala</Link>
                  </li>
                  <li>
                    <Link>Swasth Vriddhi Mala</Link>
                  </li>
                  <li>
                    <Link>Prem Vriddhi Mala</Link>
                  </li>
                  <li>
                    <Link>Rudraksha Mala</Link>
                  </li>
                  <li>
                    <Link>5 Mukhi Rudraksha Mala</Link>
                  </li>
                  <li>
                    <Link>6 Mukhi Rudraksha Mala</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
          <Link
            to="/bracelets"
            onClick={() => handleNavigation("/bracelets")}
            className="nav-item"
          >
            bracelets
            <div className="dropdowns dropdowns3">
              <div className="dropdown1">
                <ul>
                  <li>
                    <Link>7 Chakra Bracelet</Link>
                  </li>
                  <li>
                    <Link>Aventurine Bracelet</Link>
                  </li>
                  <li>
                    <Link>Bronzite Bracelet</Link>
                  </li>
                  <li>
                    <Link>Golden Obsidian Bracelet</Link>
                  </li>
                  <li>
                    <Link>Kambaba Jasper Bracelet</Link>
                  </li>
                  <li>
                    <Link>Natural Agade (Seven chakra) Bracelet</Link>
                  </li>
                  <li>
                    <Link>Natural Botswana Bracelet</Link>
                  </li>
                  <li>
                    <Link>Natural Dalmatian Jasper Bracelet</Link>
                  </li>
                  <li>
                    <Link>Natural Picasso Bracelet</Link>
                  </li>
                  <li>
                    <Link>Obsidian (Black) Bracelet</Link>
                  </li>
                  <li>
                    <Link>Rudraksha Crystal Bracelet</Link>
                  </li>
                  <li>
                    <Link>Sodalite Bracelet</Link>
                  </li>
                  <li>
                    <Link>Turquoise Bracelet</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown2">
                <ul>
                  <li>
                    <Link>Amethyst Bracelet</Link>
                  </li>
                  <li>
                    <Link>Bloodstone Bracelet</Link>
                  </li>
                  <li>
                    <Link>Evil Eye Bracelet</Link>
                  </li>
                  <li>
                    <Link>Howlite Bracelet</Link>
                  </li>
                  <li>
                    <Link>Mother of pearl Bracelet</Link>
                  </li>
                  <li>
                    <Link>Natural Agate (White) Bracelet</Link>
                  </li>
                  <li>
                    <Link>Natural Chalcedony (Hakik) Bracelet</Link>
                  </li>
                  <li>
                    <Link>Natural Jade Bracelet</Link>
                  </li>
                  <li>
                    <Link>Natural Tiger Eye Bracelet</Link>
                  </li>
                  <li>
                    <Link>Rose Quartz Bracelet</Link>
                  </li>
                  <li>
                    <Link>Sillimanite Cat's Eye Bracelet</Link>
                  </li>
                  <li>
                    <Link>Tourmaline Bracelet</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown3">
                <ul>
                  <li>
                    <Link>Amazonite Bracelet</Link>
                  </li>
                  <li>
                    <Link>Azurite Bracelet</Link>
                  </li>
                  <li>
                    <Link>Dragopn Vei Agate Bracelet</Link>
                  </li>
                  <li>
                    <Link>Hematite Seven Chakra Bracelet</Link>
                  </li>
                  <li>
                    <Link>Labradorite Bracelet</Link>
                  </li>
                  <li>
                    <Link>Natural Agate (Black) Bracelet</Link>
                  </li>
                  <li>
                    <Link>Natural Camel Jasper Bracelet</Link>
                  </li>
                  <li>
                    <Link>Natural Hematite Bracelet</Link>
                  </li>
                  <li>
                    <Link>Natural Rock Crystal Bracelet</Link>
                  </li>
                  <li>
                    <Link>Rhodonite Bracelet</Link>
                  </li>
                  <li>
                    <Link>Sevem Chakra Jasper Bracelet</Link>
                  </li>
                  <li>
                    <Link>Sunstone Bracelet</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
          <Link to="/trees" onClick={() => handleNavigation("/trees")} className="nav-item">
            Trees
          </Link>
          <Link to="/rakhi" onClick={() => handleNavigation("/rakhi")} className="nav-item">
            Rakhi
          </Link>
          <Link to="/gifts" onClick={() => handleNavigation("/gifts")} className="nav-item">
            Gifts
          </Link>
        </div>

        <div className="user">
          <Link to='/signup'>
            <i className="ri-user-3-line"></i>
          </Link>
          <Link onClick={toggleSearch}>
            <i className="ri-search-line"></i>
          </Link>
          <Link to="/addtocart">
            <i className="ri-shopping-cart-line"></i>
            {cartCount > 0 && <span>{cartCount}</span>}
          </Link>
        </div>
      </div>

      {isSearchOpen && (
        <div className="search-bar-container">
          <i className="ri-search-line"></i>
          <input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search"
          />
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}
          {suggestions.length > 0 && (
            <ul className="suggestions-list" aria-live="polite">
              {suggestions.map((item) => (
                <li key={item._id} onClick={() => handleSearchSelect(item)}>
                  {item.Name} ({item.category})
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
