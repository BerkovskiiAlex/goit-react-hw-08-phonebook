import React, { useEffect } from 'react';
import 'modern-normalize';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'Redux/Contacts/operations';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts/Contacts';
import { UserMenu } from 'pages/User-Menu/UserMenu';
import { PrivateRoute } from 'HOC/PrivateRoute';
import { selectIsLoggedIn, selectIsRefresh } from 'Redux/Auth/selectors';
import { PublicRoute } from 'HOC/PublicRoute';
import { refreshThunk } from 'Redux/Auth/operations';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <Loader />
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
        <Route
          path="usermenu"
          element={
            <PrivateRoute>
              <UserMenu />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

//
