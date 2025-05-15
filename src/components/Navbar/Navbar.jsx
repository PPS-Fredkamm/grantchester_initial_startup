import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Alumbiz
      </Link>

      <div className="navbar-links">
        <Link to="/login" className="btn-signin">
          Sign in
        </Link>
        <Link to="/signup" className="btn-signup">
          Sign up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
