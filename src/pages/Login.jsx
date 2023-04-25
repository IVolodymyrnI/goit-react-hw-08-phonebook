import { Box } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Box p={4} width={350} heigth={'auto'} m={'auto'}>
      <LoginForm />
    </Box>
  );
}
