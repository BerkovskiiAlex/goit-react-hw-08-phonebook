import React, { useEffect } from 'react';
import 'modern-normalize';
import { Input } from './Input/Input';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsItems,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'Redux/sellectors';
import { addFilter } from 'Redux/phonebookSlise';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from 'Redux/operations';
import { Loader } from './Loader';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';
import { UserMenu } from 'pages/UserMenu';
import { PrivateRoute } from 'HOC/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

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
            <Input onSubmit={handleAddContact} />
            <ContactsList
              contacts={filteredContacts}
              onDeleteContact={handleDeleteContact}
            />
            <Filter onFilterChange={handleSetFilter} filter={filter} />
          </section>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <Contacts />
                  </PrivateRoute>
                }
              />
              <Route path="usermenu" element={<UserMenu />} />
              <Route path="*" element={<Register />} />
            </Route>
          </Routes>
        </div>
      )}
    </div>
  );
};

//
