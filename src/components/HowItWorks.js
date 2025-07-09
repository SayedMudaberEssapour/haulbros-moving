import React from "react";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-section">
      <h2>How It Works</h2>
      <div className="how-steps">
        <div className="how-step">
          <div className="how-icon">1</div>
          <h3>Get a Quote</h3>
          <p>Use our instant quote tool to get transparent pricing.</p>
        </div>
        <div className="how-step">
          <div className="how-icon">2</div>
          <h3>Book Your Move</h3>
          <p>Pick your date and service level. We handle the heavy lifting.</p>
        </div>
        <div className="how-step">
          <div className="how-icon">3</div>
          <h3>Relax</h3>
          <p>Our team takes care of everything, start to finish.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
