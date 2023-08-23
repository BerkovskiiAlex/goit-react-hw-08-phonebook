import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn, selectUser } from 'Redux/Auth/selectors';
import { StyledDiv, StyledH1, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  return (
    <nav>
      <StyledDiv>
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>

        {isLoggedIn && <StyledNavLink to="/usermenu">User menu</StyledNavLink>}

        {isLoggedIn && <StyledH1>{`${name}`}</StyledH1>}

        <StyledNavLink to="/register">Register</StyledNavLink>
        <StyledNavLink to="/login">Login</StyledNavLink>
      </StyledDiv>
    </nav>
  );
};
