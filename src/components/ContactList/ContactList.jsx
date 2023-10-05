import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

import { ContactListItem } from '../ContactListItem';
import PropTypes from 'prop-types';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} onButtonClick={handleDeleteContact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onButtonClick: PropTypes.func,
};
