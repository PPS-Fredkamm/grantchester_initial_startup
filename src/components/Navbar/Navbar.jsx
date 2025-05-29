import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import ProfilePlaceholder from '../../assets/Images/profilePlaceholder.jpg';
import grantchester from '../../assets/Images/grantchester.png'

import { useUser } from '../../Data/UserContext';
import './Navbar.css';

// import React, { useState } from 'react';

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <nav className="navbar">
//       <Link to="/" className="navbar-brand">
//         Alumbiz
//       </Link>

      
//       <div className="navbar-links">
//         <Link to="/login" className="btn-signin">Sign in</Link>
//         <Link to="/signup" className="btn-signup">Sign up</Link>
//           <div className="hamburger">☰</div>
//       </div>

//       {/* ✅ Move hamburger here */}
//   <div className="dropdown-container">
//     <div className="hamburger" onClick={toggleMenu}>
//       TEST
//     </div>
//     {menuOpen && (
//       <div className="dropdown-menu">
//         <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
//         <Link to="/settings" onClick={() => setMenuOpen(false)}>Settings</Link>
//         <Link to="/logout" onClick={() => setMenuOpen(false)}>Log Out</Link>
//       </div>
//     )}
//   </div>
// </nav>
function CustomNavbar() {
  const { isAuthenticated, logout } = useUser();

  // Placeholder data — eventually pulled from real user object
  const user = {
    name: 'username',
    email: 'username@example.com',
    profileImg: ProfilePlaceholder,
  };

  return (
    <Navbar expand="lg" className="navbar-styling px-3">
      <Container fluid>
        <Navbar.Brand href="https://alumbiz.com" target="_blank" rel="noopener noreferrer">
  <img
    src={grantchester}
    alt="Alumbiz Logo"
    height="40"
    style={{ objectFit: 'contain' }}
  />
</Navbar.Brand>

        <Nav className="me-auto">
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/Why Donate Stock" className="nav-button">Why Donate Stock</Nav.Link>
             <Nav.Link href="/For Donors" className="nav-button">For Donors</Nav.Link>
             <Nav.Link href="/Universities" className="nav-button">Universities</Nav.Link>
             <Nav.Link href="/Partners" className="nav-button">Partners</Nav.Link>
             <Nav.Link href="/Resources" className="nav-button">Resources</Nav.Link>

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
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
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
