import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import { checkOnUniqueName } from 'utils';
import { addSchema } from './ContactFormValidation';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsApi';

export const ContactForm = ({ onClose }) => {
  const { data, isFetching } = useFetchContactsQuery();
  const [addContact, { isError, error, isLoading, isSuccess }] =
    useAddContactMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addSchema) });
  const isPending = isLoading || isFetching;

  const onSubmit = async values => {
    const isContactExist = checkOnUniqueName({
      array: data,
      name: values.name,
    });

    if (isContactExist) {
      return toast.error('The name of the contacted is already exist!');
    }

    try {
      await addContact(values);

      if (!isPending) {
        reset();
        onClose();
      }
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [error, isError]);

  useEffect(() => {
    if (isSuccess) {
      toast.success('The contact has been added!');
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">
          Name
          <Input
            placeholder="John"
            defaultValue={''}
            type="text"
            name="name"
            {...register('name')}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormLabel>
      </FormControl>
      <FormControl isInvalid={errors.number}>
        <FormLabel htmlFor="number">
          Number
          <Input
            defaultValue={''}
            type="tel"
            name="number"
            placeholder="380-972-121-34"
            {...register('number')}
          />
          <FormErrorMessage>
            {errors.number && errors.number.message}
          </FormErrorMessage>
        </FormLabel>
      </FormControl>
      <Flex justify="center" mt={4}>
        <Button type="submit" isLoading={isPending}>
          Submit
        </Button>
      </Flex>
    </form>
  );
};

ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
