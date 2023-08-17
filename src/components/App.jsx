import { ContactForm } from 'components/contactform/ContactForm';
import { ContactList } from 'components/contactlist/ContactList';
// import { Filters } from 'components/filter/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, addContact } from 'redux/actions'; // Upewnij się, że importujesz addContact
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContactHandler = contactData => {
    dispatch(addContact(contactData));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      {/* <Filters /> */}
      <h1>Phonebook</h1>
      <ContactForm addContact={addContactHandler} />
      {isLoading && !error && <p>Pobieranie danych....</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
};
