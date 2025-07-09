import React from "react";
import "./Hero.css";

function Hero({ children }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Moving Made Simple in Northern Virginia & DMV</h1>
        <p className="hero-sub">
          Trusted. Local. Family-Owned. <br />
          Get your free, instant quote below!
        </p>
        {children}
      </div>
      <div className="hero-image" />
    </section>
  );
}

export default Hero;
