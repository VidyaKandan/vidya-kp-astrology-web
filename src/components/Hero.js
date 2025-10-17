import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="quote-container">
          <img 
            src="/images/god-pic.jpg" 
            alt="God Picture" 
            className="god-pic"
          />
          <p className="quote-text">
            "The Planets and Stars have a story to tell, let us reveal it."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
