import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import ProfilePlaceholder from '../../assets/Images/profilePlaceholder.jpg';

import { useUser } from '../../Data/UserContext';
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

  // Placeholder data — eventually pulled from real user object
  const user = {
    name: 'username',
    email: 'username@example.com',
    profileImg: ProfilePlaceholder,
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary px-3">
      <Container fluid>
        <div className="d-flex w-100 justify-content-between align-items-center">
          {/* Left-aligned brand */}
          <Navbar.Brand href="/">Alumbiz</Navbar.Brand>

          {/* Center-aligned menu */}
          <Nav className="nav-center">
            <Nav.Link href="/link">Why Donate Stock</Nav.Link>
            <Nav.Link href="/link">For Donors</Nav.Link>
            <Nav.Link href="/link">For Universities</Nav.Link>
            <Nav.Link href="/link">Partners</Nav.Link>
            <Nav.Link href="/link">Resources</Nav.Link>
            <Nav.Link href="/link">Partners</Nav.Link>
            {/* <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>

          {/* Right-aligned user profile */}
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                {!isAuthenticated ? (
                  <>
                    <Button
                      href="/donate"
                      variant="primary"
                      className="donate-button"
                    >
                      Donate Shares
                    </Button>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                  </>
                ) : (
                  <NavDropdown
                    align="end"
                    title={
                      <Image
                        src={user.profileImg}
                        roundedCircle
                        width={40}
                        height={40}
                        alt="Profile"
                        className="profile-icon"
                      />
                    }
                    id="profile-dropdown"
                    className="profile-dropdown"
                  >
                    <div className="profile-card">
                      <Image
                        src={user.profileImg}
                        className="profile-card-img"
                        alt="Profile"
                      />
                      <div className="profile-card-info">
                        <strong>{user.name}</strong>
                        <div className="text-muted">{user.email}</div>
                      </div>
                    </div>
                    <NavDropdown.Item href="/profile">
                      My Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>
                      Sign Out
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
