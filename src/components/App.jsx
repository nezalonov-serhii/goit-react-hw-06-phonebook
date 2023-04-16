import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactList/Filter/Filter';
import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector(state => state.contact);

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
          <ToastContainer />
        </>
      )}
    </section>
  );
}
