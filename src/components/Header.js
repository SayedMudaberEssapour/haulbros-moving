import React from "react";
//import logo from "..assets\best-long-distance-moving-companies-6c5c0f04a49e4c85a212e463c5b1053f.jpg"; // Add your logo image to /assets

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Haul Bros Moving Co. LLC Logo" className="logo" />
      <div>
        <h1>Haul Bros Moving Co. LLC</h1>
        <p className="tagline">Relocating Made Easy</p>
      </div>
    </header>
  );
}

export default Header;
