// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../assets/css/Gemstone.css";
// import Filter from "./Filter";
// import gemstone_img from "../assets/images/gemstone_img.webp";

// const Gemstone = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <div className="gemstone_container">
//         <div className="img">
//           <img src={gemstone_img} />
//         </div>

//         <div className="product_container">
//           <button className="filterBtn" onClick={handleClick}>
//             Filter
//             <span>
//               <i className="ri-arrow-right-s-line"></i>
//             </span>
//           </button>
//           <div className={`filter ${isOpen ? "active" : ""}`}>
//             <Filter />
//             <button className="closeBtn" onClick={handleClose}>
//               <span>
//                 <i className="ri-close-line"></i>
//               </span>
//             </button>
//           </div>

//           <div className="products">
//             <Link to="/product">
//               <div className="card">
//                 <img src="" />
//                 <div className="details">
//                   <p>Pukhraj - Yellow Sapphire (5.98 Ratti)</p>
//                   <p>Price </p>
//                   <Link to="/addtocart">
//                     <button>Add to cart</button>
//                   </Link>
//                 </div>
//               </div>
//             </Link>
//             <Link to="/product">
//               <div className="card">
//                 <img src="" />
//                 <div className="details">
//                   <p>Pukhraj - Yellow Sapphire (5.98 Ratti)</p>
//                   <p>Price </p>
//                   <Link to="/addtocart">
//                     <button>Add to cart</button>
//                   </Link>
//                 </div>
//               </div>
//             </Link>
//             <Link to="/product">
//               <div className="card">
//                 <img src="" />
//                 <div className="details">
//                   <p>Pukhraj - Yellow Sapphire (5.98 Ratti)</p>
//                   <p>Price </p>
//                   <Link to="/addtocart">
//                     <button>Add to cart</button>
//                   </Link>
//                 </div>
//               </div>
//             </Link>
//             <Link to="/product">
//               <div className="card">
//                 <img src="" />
//                 <div className="details">
//                   <p>Pukhraj - Yellow Sapphire (5.98 Ratti)</p>
//                   <p>Price </p>
//                   <Link to="/addtocart">
//                     <button>Add to cart</button>
//                   </Link>
//                 </div>
//               </div>
//             </Link>
//             <Link to="/product">
//               <div className="card">
//                 <img src="" />
//                 <div className="details">
//                   <p>Pukhraj - Yellow Sapphire (5.98 Ratti)</p>
//                   <p>Price </p>
//                   <Link to="/addtocart">
//                     <button>Add to cart</button>
//                   </Link>
//                 </div>
//               </div>
//             </Link>
//             <Link to="/product">
//               <div className="card">
//                 <img src="" />
//                 <div className="details">
//                   <p>Pukhraj - Yellow Sapphire (5.98 Ratti)</p>
//                   <p>Price </p>
//                   <Link to="/addtocart">
//                     <button>Add to cart</button>
//                   </Link>
//                 </div>
//               </div>
//             </Link>
//             <Link to="/product">
//               <div className="card">
//                 <img src="" />
//                 <div className="details">
//                   <p>Pukhraj - Yellow Sapphire (5.98 Ratti)</p>
//                   <p>Price </p>
//                   <Link to="/addtocart">
//                     <button>Add to cart</button>
//                   </Link>
//                 </div>
//               </div>
//             </Link>
//             <Link to="/product">
//               <div className="card">
//                 <img src="" />
//                 <div className="details">
//                   <p>Pukhraj - Yellow Sapphire (5.98 Ratti)</p>
//                   <p>Price </p>
//                   <Link to="/addtocart">
//                     <button>Add to cart</button>
//                   </Link>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Gemstone;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Gemstone.css";
import Filter from "./Filter";
import gemstone_img from "../assets/images/gemstone_img.webp";

const Gemstone = () => {
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
        const res = await fetch('https://gemstore-backend.onrender.com/api/gemstone/all', {
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
          <img src={gemstone_img} alt="Gemstone" />
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

export default Gemstone;