import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav>
      {/* Hamburger icon */}
      <div className="header-top-menu" onClick={toggleMenu}>
        <i className="bi bi-list"></i>
      </div>

      {/* Navigation links */}
      <div className={`header-top-linksh ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" className="nav">Home</Link></li>
          <li><Link to="/about" className="nav">About</Link></li>
          <li><Link to="/authors" className="nav">Authors</Link></li>
        
          <li><Link to="/contact" className="nav">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
