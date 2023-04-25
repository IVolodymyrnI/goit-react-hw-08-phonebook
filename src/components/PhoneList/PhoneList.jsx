import { useSelector } from 'react-redux';
import { UnorderedList } from '@chakra-ui/react';

import { PhoneListItem } from 'components/PhoneListItem/PhoneListItem';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
import { selectFilter } from 'redux/filter/selectors';

export function PhoneNumberList() {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(selectFilter);

  if (!contacts) {
    return null;
  }

  const visiableContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {contacts && (
        <UnorderedList styleType="none">
          {visiableContacts.map(({ id, name, number }) => (
            <PhoneListItem key={id} id={id} name={name} number={number} />
          ))}
        </UnorderedList>
      )}
    </>
  );
}
