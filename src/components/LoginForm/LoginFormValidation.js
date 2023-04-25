import { object, string } from 'yup';

const EMAIL_PATTERN = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
const EMAIL_PATTERN_TITTLE = 'Invalid email address';
const EMAIL_REQUIRED_TEXT = 'Email is a required field';

const PASSWORD_REQUIRED_TEXT = 'Password is a required field';
const PASSWORD_MIN = 8;
const PASSWORD_MIN_TEXT = `Minimum length should be ${PASSWORD_MIN}`;

export const loginSchema = object({
  email: string()
    .required(EMAIL_REQUIRED_TEXT)
    .matches(EMAIL_PATTERN, EMAIL_PATTERN_TITTLE),
  password: string()
    .required(PASSWORD_REQUIRED_TEXT)
    .min(PASSWORD_MIN, PASSWORD_MIN_TEXT),
});
