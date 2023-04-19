import { useFormik } from 'formik';
import {
  Input,
  FormWindow,
  Label,
  Button,
  Error,
  InputWrapper,
} from './ContactFormStyle';
import { schema } from './ContactFormValidation';
import { useAddContactMutation, useFetchContactsQuery } from 'redux/operations';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import { checkOnUniqueName } from 'utils';

export const ContactForm = () => {
  const { data } = useFetchContactsQuery();
  const [addContact, { isError, error, isLoading: isAdding }] =
    useAddContactMutation();

  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
    },
    validationSchema: schema,
    onSubmit: async values => {
      const isContactExist = checkOnUniqueName({
        array: data,
        name: values.name,
      });

      if (isContactExist) {
        return toast.error('The name of the contacted is already exist!');
      }

      try {
        await addContact(values);
        formik.resetForm();
        toast.success('The contact has been added successfully!');
      } catch (err) {
        toast.error(err);
      }
    },
  });

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [error, isError]);

  return (
    <FormWindow onSubmit={formik.handleSubmit}>
      <Label htmlFor="add-contact-name">Name</Label>
      <InputWrapper>
        {formik.errors.name ? <Error>{formik.errors.name}</Error> : null}
        <Input
          type="text"
          id="add-contact-name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        ></Input>
      </InputWrapper>
      <Label htmlFor="add-contact-number">Phone number</Label>
      <InputWrapper>
        {formik.errors.phoneNumber ? (
          <Error>{formik.errors.phoneNumber}</Error>
        ) : null}
        <Input
          type="tel"
          id="add-contact-number"
          name="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        ></Input>
      </InputWrapper>
      <Button type="submit" disabled={isAdding}>
        {isAdding ? 'adding...' : 'add contact'}
      </Button>
    </FormWindow>
  );
};
