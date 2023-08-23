import { styled } from 'styled-components';

export const StyledRegisterDiv = styled.div`
  width: 50vh;
  margin: 0 auto;
  margin-top: 50px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: rgb(211 208 204);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
  padding: 20px 0;
  text-align: center;
`;

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  gap: 10px;
`;

export const StyledRegisterInput = styled.input`
  border: 1px solid black;
  border-radius: 5px;
`;

export const StyledRegisterButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
`;
