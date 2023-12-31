import { styled } from 'styled-components';

export const StyledForm = styled.form`
  width: 50vh;
  margin: 0 auto;
  margin-top: 50px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: rgb(211 208 204);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 20px 0;
`;

export const StyledInput = styled.input`
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  border-radius: 5px;
`;
