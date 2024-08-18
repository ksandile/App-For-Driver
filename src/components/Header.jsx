// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you want to style your header

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/requests">Requests</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link> {/* Link to Sign In page */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
