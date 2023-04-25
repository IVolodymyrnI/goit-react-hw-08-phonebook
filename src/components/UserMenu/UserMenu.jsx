import { Flex, Text } from '@chakra-ui/react';
import { Logout } from 'components/Logout/Logout';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const { userName } = useAuth();

  return (
    <Flex align="center">
      <Text mr={18}>
        <b>Welcome! {userName && userName}</b>
      </Text>
      <Logout />
    </Flex>
  );
};
