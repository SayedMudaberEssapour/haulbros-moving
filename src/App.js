import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuoteForm from "./components/QuoteForm";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero>
        <QuoteForm />
      </Hero>
      <HowItWorks />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
