import { useDeleteContactMutation } from 'redux/operations';
import { Info, Item } from './PhoneListItemStyle';
import { Button } from 'components/ContactForm/ContactFormStyle';

export const PhoneNumberListItem = ({ id, name, phoneNumber }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Item key={id}>
      <Info>
        {name}: {phoneNumber}
      </Info>
      <Button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        {isLoading ? 'Deleting' : 'Delete'}
      </Button>
    </Item>
  );
};
