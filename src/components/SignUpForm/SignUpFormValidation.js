import { object, string } from 'yup';

const EMAIL_PATTERN = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
const EMAIL_PATTERN_TEXT = 'Invalid email address';
const EMAIL_REQUIRED_TEXT = 'Email is a required field';

const NAME_REQUIRED_TEXT = 'Name is a required field';
const NAME_PATTERN =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const NAME_PATTERN_TEXT =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.";

const PASSWORD_REQUIRED_TEXT = 'Password is a required field';
const PASSWORD_MIN = 8;
const PASSWORD_MIN_TEXT = `Minimum length should be ${PASSWORD_MIN}`;

export const registerSchema = object({
  email: string()
    .required(EMAIL_REQUIRED_TEXT)
    .matches(EMAIL_PATTERN, EMAIL_PATTERN_TEXT),
  name: string()
    .required(NAME_REQUIRED_TEXT)
    .matches(NAME_PATTERN, NAME_PATTERN_TEXT),
  password: string()
    .required(PASSWORD_REQUIRED_TEXT)
    .min(PASSWORD_MIN, PASSWORD_MIN_TEXT),
});
