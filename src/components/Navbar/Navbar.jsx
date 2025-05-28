import { Link } from 'react-router-dom';
import './Navbar.css';
import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Alumbiz
      </Link>

      
      <div className="navbar-links">
        <Link to="/login" className="btn-signin">Sign in</Link>
        <Link to="/signup" className="btn-signup">Sign up</Link>
          <div className="hamburger">☰</div>
      </div>

      {/* ✅ Move hamburger here */}
  <div className="dropdown-container">
    <div className="hamburger" onClick={toggleMenu}>
      TEST
    </div>
    {menuOpen && (
      <div className="dropdown-menu">
        <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
        <Link to="/settings" onClick={() => setMenuOpen(false)}>Settings</Link>
        <Link to="/logout" onClick={() => setMenuOpen(false)}>Log Out</Link>
      </div>
    )}
  </div>
</nav>
  );
}

export default Navbar;
