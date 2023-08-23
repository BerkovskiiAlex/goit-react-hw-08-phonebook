import { addContactThunk, deleteContactThunk } from 'Redux/operations';
import { addFilter } from 'Redux/phonebookSlise';
import {
  selectContactsItems,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'Redux/sellectors';
import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Input } from 'components/Input/Input';
import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const handleAddContact = (name, number) => {
    const newContact = { name, number };

    if (contacts.some(contact => contact.name === name)) {
      toast(`${name} is already in contacts`, { autoClose: 4000 });
    } else {
      dispatch(addContactThunk(newContact));
    }
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const handleSetFilter = event => {
    const { value } = event.target;
    dispatch(addFilter(value));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  const filteredContacts = filterContacts();

  return (
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : isLoading ? (
        <Loader />
      ) : (
        <div>
          <section>
            <div>
              <Input onSubmit={handleAddContact} />
            </div>
            <ContactsList
              contacts={filteredContacts}
              onDeleteContact={handleDeleteContact}
            />
            <Filter onFilterChange={handleSetFilter} filter={filter} />
          </section>
        </div>
      )}
    </div>
  );
};
