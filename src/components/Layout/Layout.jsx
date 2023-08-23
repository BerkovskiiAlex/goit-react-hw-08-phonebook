import React from 'react';
import { Navigation } from '../Navigation/Navigation.jsx';
import { Outlet } from 'react-router-dom';
import { StyledSection } from './Layout.styled.js';

export const Layout = () => {
  return (
    <StyledSection>
      <Navigation />

      <div>
        <Outlet />
      </div>
    </StyledSection>
  );
};
