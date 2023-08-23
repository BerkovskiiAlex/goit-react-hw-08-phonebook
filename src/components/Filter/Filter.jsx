import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './Filter.styled';
import { StyledInput } from 'components/Input/Input.styled';

export const Filter = ({ onFilterChange, filter }) => {
  return (
    <>
      <StyledLabel>
        <StyledInput
          type="text"
          name="filter"
          placeholder="Find contacts by name"
          value={filter}
          onChange={onFilterChange}
        />
      </StyledLabel>
    </>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func,
  filter: PropTypes.string,
};
