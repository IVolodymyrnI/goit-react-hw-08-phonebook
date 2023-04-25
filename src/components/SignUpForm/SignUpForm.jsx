import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Text,
  Flex,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast';

import { useRegisterMutation } from 'redux/auth/authApi';
import { setToken, setUser } from 'redux/auth/authSlice';
import { registerSchema } from './SignUpFormValidation';

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const [registerUser, { isSuccess, error, isError }] = useRegisterMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = async data => {
    try {
      const res = await registerUser(data);
      dispatch(setToken(res.data.token));
      dispatch(setUser(res.data.user));
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isError) {
      if (error.status === 400) {
        toast.error('The email already exists!');
      }
    }
  }, [error, isError]);

  useEffect(() => {
    if (isSuccess) {
      toast("We're welcoming a new participant!", { icon: '👋' });
    }
  }, [isSuccess]);

  return (
    <>
      <Text mb={8} textAlign="center" fontSize={32} fontWeight={600}>
        Sign up
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">
            User name
            <Input
              id="name"
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
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">
            Email
            <Input
              defaultValue={''}
              type="email"
              name="email"
              {...register('email')}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormLabel>
        </FormControl>
        <FormControl isInvalid={errors.password} mb={8}>
          <FormLabel htmlFor="password">
            Password
            <Input
              defaultValue={''}
              type="password"
              name="password"
              {...register('password')}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormLabel>
        </FormControl>
        <Flex justifyContent="center">
          <Button type="submit" isLoading={isSubmitting}>
            Submit
          </Button>
        </Flex>
      </form>
    </>
  );
};
