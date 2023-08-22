import React, { useEffect } from 'react';
import 'modern-normalize';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'Redux/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';
import { UserMenu } from 'pages/UserMenu';
import { PrivateRoute } from 'HOC/PrivateRoute';
import { selectIsLoggedIn } from 'Redux/Auth/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const login = useSelector(selectIsLoggedIn);
  useEffect(() => {
    login && dispatch(fetchContactsThunk());
  }, [dispatch, login]);

  return (
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
  );
};

//
