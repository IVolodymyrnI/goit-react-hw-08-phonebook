import { useSelector } from 'react-redux';
import { selectEmail, selectName, selectToken } from 'redux/auth/authSelectors';

export const useAuth = () => {
  return {
    userName: useSelector(selectName),
    userEmail: useSelector(selectEmail),
    token: useSelector(selectToken),
  };
};
