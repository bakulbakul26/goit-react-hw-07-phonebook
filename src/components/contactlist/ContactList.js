import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFiltersContacts } from 'redux/selectors';
import { Contact } from 'redux/contact';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filterContacts = useSelector(selectFiltersContacts);
  const [searchText, setSearchText] = useState('');

  const filteredContacts = filterContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={css.contactListContainer}>
      <div className={css.searchContainer}>
        <input
          type="text"
          placeholder="Wyszukaj kontakt..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>
      <div className={css.scrollableList}>
        <ul className={css.contactList}>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
