import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';

import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { NavBar } from 'components/NavBar/NavBar';

export const SharedLayout = () => {
  const { token } = useAuth();

  return (
    <>
      <Box mb={8}>
        <Flex align="center" justify="space-between">
          <NavBar />
          {token ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Box>
      <Toaster />
      <Suspense fallback>
        <Outlet />
      </Suspense>
    </>
  );
};
