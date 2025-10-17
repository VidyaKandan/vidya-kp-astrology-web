import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    { label: 'Name', value: 'Vidya Kandaswamy' },
    { label: 'Phone Number', value: '832 542 6965' },
    { label: 'Email', value: 'vidyakpastrology@gmail.com' },
    { label: 'Booking', value: 'Call/ Text to book an appointment' },
    { label: 'YouTube Channel', value: 'KPAstrologyPredictions' },
    { label: 'Instagram', value: 'kpastrologypredictions' }
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">
        Contact Details
      </h2>
      
      <div className="contact-grid">
        {contactInfo.map((item, index) => (
          <div key={index} className="contact-item">
            <span className="contact-label">{item.label}</span>
            <span className="contact-value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
