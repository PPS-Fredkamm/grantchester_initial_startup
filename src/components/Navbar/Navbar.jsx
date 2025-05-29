import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import ProfilePlaceholder from '../../assets/Images/profilePlaceholder.jpg';

import { useUser } from '../../Data/UserContext';
import './Navbar.css';

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
        <Navbar.Brand href="/">Alumbiz</Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
