import { Link as RouteLink } from 'react-router-dom';
import { Text, Link, Stack } from '@chakra-ui/react';

export function NotFoundPage() {
  const redirectPage = (
    <Link as={RouteLink} to="/" fontWeight={700}>
      this page
    </Link>
  );

  return (
    <Stack>
      <Text mb={8} fontSize={72} fontWeight={600}>
        Error 404
      </Text>
      <Text mb={4}>{`It seems this page doesn't exist =(`}</Text>
      <Text>You might try and search {redirectPage}</Text>
    </Stack>
  );
}
