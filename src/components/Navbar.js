import React from "react";
import logo from "../assets/best-long-distance-moving-companies-6c5c0f04a49e4c85a212e463c5b1053f.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Haul Bros Moving Co. Logo" className="navbar-logo" />
        <span className="navbar-title">Haul Bros Moving Co.</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#quote" className="navbar-cta">Get a Quote</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
