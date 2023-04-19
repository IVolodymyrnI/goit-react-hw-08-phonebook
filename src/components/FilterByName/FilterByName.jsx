import { Formik, Form } from 'formik';
import { Label, Input } from 'components/ContactForm/ContactFormStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export function FilterByName() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

	const onChange = ({ currentTarget: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <Formik initialValues={{ findName: '' }}>
      <Form>
        <Label htmlFor="name-contact-filter">Find contacts by name</Label>
        <Input
          type="text"
          id="name-contact-filter"
          name="findName"
          value={filter}
          onChange={onChange}
        ></Input>
      </Form>
    </Formik>
  );
}
