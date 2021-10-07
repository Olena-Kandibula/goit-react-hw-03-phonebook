import PropTypes from 'prop-types';
import s from '../ContactList/ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <div>
      <ul className={s.list}>
        {contacts.map(contact => (
          <li className={s.item} key={contact.id}>
            <p>
              <span>{contact.name}:</span> <span>{contact.number}</span>
            </p>

            <button
              className={s.buttonDelete}
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};
export default ContactList;
