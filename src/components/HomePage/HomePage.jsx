import { Text, Link, Stack } from '@chakra-ui/react';

import { useAuth } from 'hooks';
import { Link as RouteLink } from 'react-router-dom';

export const HomePage = () => {
  const { token, userName } = useAuth();
  const loginLink = (
    <Link fontWeight={600} as={RouteLink} to="/login">
      login
    </Link>
  );
  const isLogged = !token ? <Text>Please {loginLink} yourself.</Text> : '';
  const isUserName = token ? userName : '';

  return (
    <Stack textAlign="center" fontSize={36} fontWeight={400}>
      <Text>Welcome {<b>{isUserName}</b>} to Contacts!</Text>
      {isLogged}
    </Stack>
  );
};
