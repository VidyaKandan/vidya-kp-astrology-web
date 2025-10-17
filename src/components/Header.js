import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Only update active section if we're not in the middle of a programmatic scroll
      if (!window.isScrollingProgrammatically) {
        const sections = ['home', 'services', 'payment', 'contact', 'faq', 'about'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        } else {
          if (window.scrollY < 200) {
            setActiveSection('home');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId); // Immediately set active section
    window.isScrollingProgrammatically = true; // Set flag to prevent scroll detection interference
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 150; // Increased offset to show the heading properly
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Reset flag after scroll animation completes
      setTimeout(() => {
        window.isScrollingProgrammatically = false;
      }, 1000);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', href: '' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'payment', label: 'Payment', href: '#payment' },
    { id: 'contact', label: 'Contact', href: '#contact' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
    { id: 'about', label: 'About', href: '#about' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <h1 className="header-title">
          <span className="yellow-text">Vidya KP Astrology Predictions</span>
        </h1>
        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
