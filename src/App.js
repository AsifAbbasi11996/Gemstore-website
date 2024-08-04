import { Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import AddtoCart from "./components/AddtoCart";
import Footer from "./components/Footer";
import Gemstone from "./components/Gemstone.js";
import Buynow from "./components/Buynow.js";
import Address from "./components/Address";
import Payment from "./components/Payment";
import Address2 from "./components/Address2";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/addtocart" element={<AddtoCart />} />
        <Route path="/gemstone" element={<Gemstone />} />
        <Route path="/buynow" element={<Buynow />} />
        <Route path="/address" element={<Address />} />
        <Route path="/address2" element={<Address2 />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
