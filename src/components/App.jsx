import React, { useEffect } from 'react';
import 'modern-normalize';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'Redux/operations';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts/Contacts';
import { UserMenu } from 'pages/User-Menu/UserMenu';
import { PrivateRoute } from 'HOC/PrivateRoute';
import { selectIsLoggedIn, selectIsRefresh } from 'Redux/Auth/selectors';
import { PublicRoute } from 'HOC/PublicRoute';
import { refreshThunk } from 'Redux/Auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);

  const login = useSelector(selectIsLoggedIn);
  useEffect(() => {
    login && dispatch(fetchContactsThunk());
    dispatch(refreshThunk());
  }, [dispatch, login]);

  return isRefresh ? (
    <h1>Loading...</h1>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="usermenu" element={<UserMenu />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

//
