import { Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import AddtoCart from "./components/AddtoCart";
import Footer from "./components/Footer";
import Gemstone from "./components/Gemstone.js";
import Rudraksha from "./components/Rudraksha.js";
import Bracelets from "./components/Bracelets.js";
import Trees from "./components/Trees.js";
import Gifts from "./components/Gifts.js";
import Rakhi from "./components/Rakhi.js";
import Buynow from "./components/Buynow.js";
import Address from "./components/Address";
import Payment from "./components/Payment";
import Address2 from "./components/Address2";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/addtocart" element={<AddtoCart />} />
        <Route path="/gemstone" element={<Gemstone />} />
        <Route path="/rudraksha" element={<Rudraksha />} />
        <Route path="/bracelets" element={<Bracelets />} />
        <Route path="/trees" element={<Trees />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/rakhi" element={<Rakhi />} />
        <Route path="/buynow" element={<Buynow />} />
        <Route path="/address" element={<Address />} />
        <Route path="/address2" element={<Address2 />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
