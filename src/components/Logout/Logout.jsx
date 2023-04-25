import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { toast } from 'react-hot-toast';

import { useLogoutUserMutation } from 'redux/auth/authApi';
import { clearData } from 'redux/auth/authSlice';

export const Logout = () => {
  const dispatch = useDispatch();
  const [logoutUser, { isSuccess }] = useLogoutUserMutation();

  const onClick = async e => {
    e.preventDefault();

    try {
      await logoutUser();
      dispatch(clearData());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast("We're sorry to see you go", { icon: '🥲' });
    }
  }, [isSuccess]);

  if (isSuccess) {
    return <Navigate to={'/login'} />;
  }

  return (
    <Button type="button" onClick={onClick}>
      Log out
    </Button>
  );
};
