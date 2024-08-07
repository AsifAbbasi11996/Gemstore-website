import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddtoCart from "./components/AddtoCart";
import Footer from "./components/Footer";
import Gemstone from "./components/Gemstone.js";
import GemstoneProduct from "./components/GemstoneProduct.js";
import Rudraksha from "./components/Rudraksha.js";
import RudrakshaProduct from "./components/RudrakshaProduct.js";
import Bracelets from "./components/Bracelets.js";
import BraceletsProduct from "./components/BraceletsProduct.js";
import Trees from "./components/Trees.js";
import TreesProduct from "./components/TreesProduct.js";
import Rakhi from "./components/Rakhi.js";
import RakhiProduct from "./components/RakhiProduct.js";
import Gifts from "./components/Gifts.js";
import Buynow from "./components/Buynow.js";
import Address from "./components/Address";
import Payment from "./components/Payment";
import Address2 from "./components/Address2";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";

function App() {
 
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtocart/:id" element={<AddtoCart />} />
        <Route path="/gemstone" element={<Gemstone />} />
        <Route path="/gemstone/product/:id" element={<GemstoneProduct />} />
        <Route path="/rudraksha" element={<Rudraksha />} />
        <Route path="/rudraksha/product/:id" element={<RudrakshaProduct />} />
        <Route path="/bracelets" element={<Bracelets />} />
        <Route path="/bracelets/product/:id" element={<BraceletsProduct />} />
        <Route path="/trees" element={<Trees />} />
        <Route path="/trees/product/:id" element={<TreesProduct />} />
        <Route path="/rakhi" element={<Rakhi />} />
        <Route path="/rakhi/product/:id" element={<RakhiProduct />} />
        <Route path="/gifts" element={<Gifts />} />
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
