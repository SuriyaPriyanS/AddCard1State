import React from "react";
import "./Navber.css"; // Import your CSS file
import Footer from "./Footer"; // Import the Footer component

const Navbar = ({ cartItemCount }) => {
  return (
    <div className="navbar">
      {/* Navbar container */}
      <div className="container">
        <div className="logo">My Book shop</div>
        {/* Cart section */}
        <div className="cart">
          <button className="cart-button">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-name">Cart</span>
            <span className="cart-count">{cartItemCount}</span>
          </button>
        </div>
      </div>
      {/* Header background */}
      <div className="header-bg">
        <div className="container">
          <div className="header-text">
            <h1 className="header-title">Suriya edite code </h1>
            <p className="header-subtitle">Ponniyin Selvan  Series</p>
          </div>
        </div>
      </div>
      {/* Footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Navbar;