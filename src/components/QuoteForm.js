import React, { useState } from "react";

const steps = [
  { label: "Enter your ZIP code", name: "fromZip", type: "text", placeholder: "e.g. 22182" },
  { label: "When are you moving?", name: "moveDate", type: "date" },
  { label: "Choose your moving size", name: "moveSize", type: "select", options: ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom", "4 Bedroom", "Business"] },
  { label: "What type of service are you looking for?", name: "serviceType", type: "select", options: ["Standard", "Premium"] },
  { label: "Will you need a truck?", name: "truckNeeded", type: "select", options: ["Yes", "No"] },
  { label: "Where are you moving to? (ZIP code)", name: "toZip", type: "text", placeholder: "e.g. 22314" },
  { label: "Your email address", name: "email", type: "email", placeholder: "you@email.com" },
];

function QuoteForm() {
  const [form, setForm] = useState({
    fromZip: "",
    moveDate: "",
    moveSize: "Studio",
    serviceType: "Standard",
    truckNeeded: "Yes",
    toZip: "",
    email: "",
  });
  const [step, setStep] = useState(0);
  const [quote, setQuote] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [steps[step].name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate quote
      let base = 150;
      const sizeRates = {
        "Studio": 0,
        "1 Bedroom": 50,
        "2 Bedroom": 100,
        "3 Bedroom": 200,
        "4 Bedroom": 300,
        "Business": 400,
      };
      base += sizeRates[form.moveSize];
      if (form.serviceType === "Premium") base += 100;
      if (form.truckNeeded === "Yes") base += 75;
      setQuote(base);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  // Progress bar style
  const progress = ((step + (quote ? 1 : 0)) / steps.length) * 100;

  return (
    <section className="quote-section">
      <h2>Get Your Free Moving Quote</h2>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      {!quote ? (
        <form className="quote-form" onSubmit={handleNext}>
          <label>
            {steps[step].label}
            {steps[step].type === "select" ? (
              <select
                name={steps[step].name}
                value={form[steps[step].name]}
                onChange={handleChange}
                required
              >
                {steps[step].options.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type={steps[step].type}
                name={steps[step].name}
                value={form[steps[step].name]}
                onChange={handleChange}
                required
                placeholder={steps[step].placeholder || ""}
                autoFocus
              />
            )}
          </label>
          <div className="form-nav">
            {step > 0 && (
              <button type="button" className="back-btn" onClick={handleBack}>
                Back
              </button>
            )}
            <button type="submit" className="next-btn">
              {step === steps.length - 1 ? "Get Quote" : "Next"}
            </button>
          </div>
        </form>
      ) : (
        <div className="quote-result">
          <h3>Your Estimated Quote: <span>${quote}</span></h3>
          <p>A copy has been sent to your email.</p>
        </div>
      )}
    </section>
  );
}

export default QuoteForm;
