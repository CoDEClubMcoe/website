import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '/images/code.png';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuActive(false); // Close the menu after scrolling
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="Club Logo" className="navbar-logo" />
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`navbar-links ${menuActive ? 'active' : ''}`}>
        {['Home', 'Events', 'About', 'Team', 'Register'].map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.toLowerCase());
              }}
              className="navbar-link"
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
