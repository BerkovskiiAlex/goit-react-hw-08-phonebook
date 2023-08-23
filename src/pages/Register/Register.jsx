import { registerThunk } from 'Redux/Auth/operations';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  StyledRegisterButton,
  StyledRegisterDiv,
  StyledRegisterForm,
  StyledRegisterInput,
} from './Register.styled';

// Alexey
// Alexey100500@mail.com
// qwerty123456

export const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { name, password, email };
    dispatch(registerThunk(credentials))
      .unwrap()
      .then(res => {
        toast.success(`Registration successful, hello ${res.user.name}`);
      })
      .catch(err => {
        toast.error('Try another data!');
      });
  };
  return (
    <section>
      <StyledRegisterDiv>
        <h1>Register</h1>
        <StyledRegisterForm onSubmit={handleSubmit}>
          <StyledRegisterInput
            placeholder="Enter your name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <StyledRegisterInput
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <StyledRegisterInput
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div>
            <StyledRegisterButton type="submit">Register</StyledRegisterButton>
          </div>
          <span>
            Are you already registered?
            <Link to="/login">Go to login form</Link>
          </span>
        </StyledRegisterForm>
      </StyledRegisterDiv>
    </section>
  );
};
