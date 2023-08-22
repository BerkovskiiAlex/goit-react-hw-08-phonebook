import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn, selectUser } from 'Redux/Auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  return (
    <nav>
      <div>
        <NavLink to="/contacts">Contacts</NavLink>
        {isLoggedIn ? <h1>{`${name}`}</h1> : null}
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        {isLoggedIn ? <NavLink to="/usermenu">User menu</NavLink> : null}
      </div>
    </nav>
  );
};
