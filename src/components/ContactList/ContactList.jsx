import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';

import { Item } from './ContactList.styled';

export function ContactList() {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contact);
  const dispatch = useDispatch();

  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </Item>
        );
      })}
    </ul>
  );
}
