import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Add About and Contact links */}
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <h1>WorkWay</h1>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', color: 'black', marginRight: '20px' }}>
          <span>About</span>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'black', marginRight: '20px' }}>
          <span>Contact</span>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
