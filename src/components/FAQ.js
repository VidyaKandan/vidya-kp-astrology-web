import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const faqCategories = [
    {
      title: 'Life Span and Longevity',
      questions: [
        'What do the stars say about my life expectancy?',
        'Are there remedies to enhance longevity?'
      ]
    },
    {
      title: 'Marriage and Relationships',
      questions: [
        'Will I have an arranged or love marriage?',
        'What are the chances of success in my love life/ proposal?',
        'Is my current relationship astrologically compatible?'
      ]
    },
    {
      title: 'Children and Family',
      questions: [
        'Will I have children?',
        'What does the future hold for my children\'s studies and career?'
      ]
    },
    {
      title: 'Career and Job Opportunities',
      questions: [
        'Should I consider a foreign job opportunity?',
        'Will I get a job transfer or promotion?',
        'What are my prospects for starting a new or multiple businesses?',
        'Is partnership business favorable for me?'
      ]
    },
    {
      title: 'Immigration and Legal Matters',
      questions: [
        'Will I get my Visa/ EAD/ Green Card or Citizenship?'
      ]
    },
    {
      title: 'Health and Wellness',
      questions: [
        'Are there any astrological insights regarding diseases or their cure?',
        'What can be done to ensure better health recovery?'
      ]
    },
    {
      title: 'Real Estate and Property',
      questions: [
        'Is it the right time to buy or sell a house/property?',
        'How can I recover from business or property loss?'
      ]
    },
    {
      title: 'Unexpected Events',
      questions: [
        'What is the astrological outlook for recovering from accidents?',
        'Can lost or stolen valuables be found?'
      ]
    }
  ];

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <h2 className="section-title">
        Frequently Asked Questions
      </h2>
      
      <div className="faq-container">
        {faqCategories.map((category, index) => (
          <div key={index} className="faq-category">
            <h3 
              className="faq-category-title"
              onClick={() => toggleCategory(index)}
            >
              {category.title}
              <span 
                className="expand-icon"
                style={{ transform: expandedCategory === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                ▼
              </span>
            </h3>
            
            {expandedCategory === index && (
              <div className="faq-questions">
                <ul>
                  {category.questions.map((question, qIndex) => (
                    <li key={qIndex} className="faq-question">
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
