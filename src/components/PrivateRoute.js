import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectToken);

  return token ? Component : <Navigate to={redirectTo} />;
};
