import { List } from './PhoneListStyle';
import { PhoneNumberListItem } from 'components/PhoneListItem/PhoneListItem';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/operations';
import { selectFilter } from 'redux/selectors';

export function PhoneNumberList() {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const filter = useSelector(selectFilter);

  if (!contacts) {
    return null;
  }

  const visiableContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {contacts && (
        <List>
          {visiableContacts.map(({ id, name, phoneNumber }) => (
            <PhoneNumberListItem
              key={id}
              id={id}
              name={name}
              phoneNumber={phoneNumber}
            />
          ))}
        </List>
      )}
    </>
  );
}
