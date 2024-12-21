import { Navigate, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element, ...rest }) => {
  const token = Cookies.get('jwt_token');

  if (!token) {
    return <Navigate to="/login" />;
  }
  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;
