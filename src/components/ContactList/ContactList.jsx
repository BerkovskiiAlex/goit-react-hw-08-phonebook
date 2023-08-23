import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { StyledUl } from './ContactList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledUl>
      {contacts.map(contact => (
        <li
          key={nanoid()}
          style={{ display: 'flex', gap: '12px', padding: '4px' }}
        >
          <span>
            {contact.name} {contact.number}
          </span>
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </StyledUl>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
