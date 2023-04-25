import { object, string } from 'yup';

const PHONE_NUMBER_PATTERN =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const NAME_PATTERN =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const NAME_PATTERN_TEXT =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.";
const PHONE_NUMBER_PATTERN_TITTLE =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
const NAME_REQUIRED_TEXT = 'Name is a required field';
const NUMBER_PATTERN_TEXT = 'Phone number is a required field';

export const addSchema = object({
  name: string()
    .required(NAME_REQUIRED_TEXT)
    .matches(NAME_PATTERN, NAME_PATTERN_TEXT),
  number: string()
    .required(NUMBER_PATTERN_TEXT)
    .matches(PHONE_NUMBER_PATTERN, PHONE_NUMBER_PATTERN_TITTLE),
});
