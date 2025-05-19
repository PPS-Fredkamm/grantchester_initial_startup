import { useUser } from '../../Data/UserContext';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const { login, logout } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // sets isAuthenticated to true
    navigate('/'); // navigate to protected page
  };

  const handleLogout = () => {
    logout(); // sets isAuthenticated to false
    navigate('/login'); // navigate to protected page
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <button onClick={handleLogin}>Mock Login</button>
      <button onClick={handleLogout}>Mock Logout</button>
    </div>
  );
}

export default Signup;
