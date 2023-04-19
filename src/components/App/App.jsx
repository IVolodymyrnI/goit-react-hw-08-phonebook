import { ContactForm } from 'components/ContactForm/ContactForm';
import { PhoneNumberList } from 'components/PhoneList/PhoneList';
import { FilterByName } from 'components/FilterByName/FilterByName';
import { Title, SubTitle, AppStyle } from './AppStyle';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <AppStyle>
      <Title>PhoneBook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <FilterByName />
      <PhoneNumberList />
      <Toaster />
    </AppStyle>
  );
};
