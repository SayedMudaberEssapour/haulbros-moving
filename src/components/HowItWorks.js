import React from "react";
import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    { num: "1", title: "Get a Quote", text: "Use our instant quote tool to get transparent pricing." },
    { num: "2", title: "Book Your Move", text: "Pick your date and service level. We handle the heavy lifting." },
    { num: "3", title: "Relax", text: "Our team takes care of everything, start to finish." },
  ];

  return (
    <section className="how-section">
      <h2 className="how-title">How It Works</h2>
      <div className="how-steps">
        {steps.map((step, i) => (
          <div className="how-step" key={i}>
            <div className="how-icon">{step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
