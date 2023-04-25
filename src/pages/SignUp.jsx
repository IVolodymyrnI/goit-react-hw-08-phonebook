import { Box } from '@chakra-ui/react';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';

export default function SignUp() {
  return (
    <Box p={4} width={350} heigth={'auto'} m={'auto'}>
      <SignUpForm />
    </Box>
  );
}
