import React from 'react';
import './Payment.css';

const Payment = () => {
  const paymentDetails = [
    { label: 'Horoscope Service', value: 'For one horoscope - Set of 5 questions: $100' },
    { label: 'Payment Method', value: 'Payments accepted via Zelle' },
    { label: 'Next Steps', value: 'Further details will be sent to your whatsApp number' }
  ];

  return (
    <section id="payment" className="payment-section">
      <h2 className="section-title">
        Payment Details
      </h2>
      
      <div className="payment-container">
        {paymentDetails.map((item, index) => (
          <div key={index} className="payment-item">
            <div className="payment-icon">
              <span className="icon-symbol">💰</span>
            </div>
            <div className="payment-content">
              <span className="payment-label">{item.label}</span>
              <span className="payment-value">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Payment;
