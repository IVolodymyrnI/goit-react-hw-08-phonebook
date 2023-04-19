export const checkOnUniqueName = ({ array = [], name }) => {
  const arrayOfNames = array.map(contact => contact.name.toLowerCase());
  const index = arrayOfNames.indexOf(name.toLowerCase());

  return !Boolean(index === -1);
};
