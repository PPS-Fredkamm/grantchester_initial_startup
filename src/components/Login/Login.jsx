import { useUser } from '../../Data/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login, logout } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();         // sets isAuthenticated to true
    navigate('/'); // navigate to protected page
  };

   const handleLogout = () => {
    logout();         // sets isAuthenticated to false
    navigate('/login'); // navigate to protected page
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Mock Login</button>
      <button onClick={handleLogout}>Mock Logout</button>
    </div>
  );
}
