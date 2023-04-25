import { Button, Flex, useDisclosure } from '@chakra-ui/react';

import { PhoneNumberList } from 'components/PhoneList/PhoneList';
import { FilterByName } from 'components/FilterByName/FilterByName';
import { AddContactModal } from 'components/AddContactModal/AddContactModal';

export const ContactsPage = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex mb={12}>
        <FilterByName />
        <AddContactModal isOpen={isOpen} onClose={onClose} />
        <Button onClick={onOpen}>New</Button>
      </Flex>
      <PhoneNumberList />
    </>
  );
};
