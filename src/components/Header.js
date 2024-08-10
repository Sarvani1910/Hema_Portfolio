import React from 'react';
import { Link } from 'react-router-dom';
import './Header';

const Header = () => (
  <header className="header">
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resume">Certifications&Projects</Link></li>
        <li><Link to="/portfolio">Contact Details</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;