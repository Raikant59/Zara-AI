import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className="nav-content">
        <div className="logo">Zara AI</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#use-cases">Use Cases</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#demo">Demo</a></li>
          <li><a href="#testimonials">Reviews</a></li>
        </ul>
        <a href="#demo" className="cta-button">Try Zara AI Free</a>
      </div>
    </nav>
  );
};

export default Header;
