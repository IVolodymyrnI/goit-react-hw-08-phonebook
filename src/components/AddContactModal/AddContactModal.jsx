import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { ContactForm } from 'components/ContactForm/ContactForm';

export function AddContactModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={8} width={350}>
        <ModalHeader textAlign='center' p={4}>Add a new contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={4}>
          <ContactForm onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
