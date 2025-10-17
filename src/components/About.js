import React from 'react';
import './About.css';

const About = () => {
  const paragraphs = [
    {
      text: "I'm Vidya Kandaswamy, M.Tech,",
      highlight: "I'm Vidya Kandaswamy, M.Tech,",
      isHighlighted: true
    },
    {
      text: " currently residing in Houston, Texas, USA. Astrology has been an integral part of my life, and ",
      highlight: "",
      isHighlighted: false
    },
    {
      text: "I am proud to be a third-generation astrologer in my family.",
      highlight: "I am proud to be a third-generation astrologer in my family.",
      isHighlighted: true
    }
  ];

  const secondParagraph = [
    {
      text: "My journey in this field began under the guidance of ",
      highlight: "",
      isHighlighted: false
    },
    {
      text: "my mother and Guru, ",
      highlight: "my mother and Guru, ",
      isHighlighted: true
    },
    {
      text: "S. Lokanayaki M.A, M.Philosophy, D.Astrology",
      highlight: "S. Lokanayaki M.A, M.Philosophy, D.Astrology",
      isHighlighted: true
    },
    {
      text: ", who introduced me to the profound aspects and depth of Advanced KP Stellar Astrology. With a deep passion for astrology, I am dedicated to using this time-honored science to empower individuals, providing clarity and positivity in their lives.",
      highlight: "",
      isHighlighted: false
    }
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">
        About Me
      </h2>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            {paragraphs.map((part, index) => (
              <span
                key={index}
                className={part.isHighlighted ? 'highlighted-text' : ''}
              >
                {part.text}
              </span>
            ))}
          </p>
          
          <p>
            {secondParagraph.map((part, index) => (
              <span
                key={index}
                className={part.isHighlighted ? 'highlighted-text' : ''}
              >
                {part.text}
              </span>
            ))}
          </p>
          
          <p className="centered-text">
            It is my joy to carry forward the legacy of my ancestors and share the transformative power of astrology with those seeking guidance and understanding in their lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
