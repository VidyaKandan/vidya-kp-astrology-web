import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    'Online Astrology Consultation',
    'Horoscope Reading',
    'Birth Time Correction',
    'Horary Predictions',
    'Marriage Matching',
    'Numerology',
    'Other personalized astrology services',
    'PDF of Horoscope will be given either in Tamil or English'
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="section-title">
        Services Offered
      </h2>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">
              <span className="icon-symbol">✨</span>
            </div>
            <p className="service-text">{service}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
