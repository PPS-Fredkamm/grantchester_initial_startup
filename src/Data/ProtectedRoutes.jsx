import { Navigate } from 'react-router-dom';
import { useUser } from './UserContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useUser();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
