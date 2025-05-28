import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import { useUser } from '../../Data/UserContext';

import ProfilePlaceholder from '../../assets/Images/profilePlaceholder.jpg'// adjust if needed

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
function CustomNavbar() {
  const { isAuthenticated, logout } = useUser();

  return (
    <Navbar expand="lg" className="bg-body-tertiary px-3">
      <Container fluid>
        {/* Left side: Brand + dropdown */}
        <Navbar.Brand href="/">Alumbiz</Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Right side */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {!isAuthenticated ? (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
              </>
            ) : (
              <NavDropdown
                align="end"
                title={
                  <Image
                    src={ProfilePlaceholder}
                    roundedCircle
                    width={40}
                    height={40}
                    alt="Profile"
                    className="profile-icon"
                  />
                }
                id="profile-dropdown"
              >
                <NavDropdown.Item href="/profile">View Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
