import { useEffect } from 'react';
import { ListItem, Button, Flex, Text } from '@chakra-ui/react';
import { toast } from 'react-hot-toast';

import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

export const PhoneListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading, isSuccess, isError, error }] =
    useDeleteContactMutation();

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [error, isError]);

  useEffect(() => {
    if (isSuccess) {
      toast(`The contact has been deleted!`, { icon: '🗑️' });
    }
  }, [isSuccess]);

  return (
    <>
      {!isSuccess && (
        <ListItem mb={4} key={id}>
          <Flex alignItems="center">
            <Text fontSize={24} fontWeight={500} mr={4}>
              {name}: {number}
            </Text>
            <Button
              type="button"
              onClick={() => deleteContact(id)}
              isLoading={isLoading}
            >
              X
            </Button>
          </Flex>
        </ListItem>
      )}
    </>
  );
};
