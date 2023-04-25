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
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginSchema } from './LoginFormValidation';
import { useLoginUserMutation } from 'redux/auth/authApi';
import { setToken, setUser } from 'redux/auth/authSlice';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(loginSchema) });
  const [setLogin, { isError, error, isSuccess }] = useLoginUserMutation();

  const onSubmit = async data => {
    try {
      const res = await setLogin(data);
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
        toast.error('The login or the password are invalid!');
      }

      if (error.status === 'FETCH_ERROR') {
        toast.error(error.error);
      }
    }
  }, [error, isError]);

  useEffect(() => {
    if (isSuccess) {
      toast('Welcome to Contacts!', { icon: '😍' });
    }
  }, [isSuccess]);

  return (
    <>
      <Text mb={8} fontSize={32} textAlign="center" fontWeight={600}>
        Log in
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
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
