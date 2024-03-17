import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import ProductDetails from "./Components/ProductDetails";
import Footer from "./Components/Footer";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';
import './Mobile/Responsive.scss';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route 
            path="/product" 
            element={ <Product /> } 
          />
          <Route 
            path="/cart" 
            element = { 
              <Cart />
            } 
          />
          <Route path="/login" element={ <Login /> } />
          <Route 
            path="/productdetails" 
            element = { 
              <ProductDetails /> 
            } 
          /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;