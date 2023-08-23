import { loginThunk } from 'Redux/Auth/operations';
import { selectIsLoggedIn } from 'Redux/Auth/selectors';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  StyledLoginButton,
  StyledLoginDiv,
  StyledLoginForm,
  StyledLoginInput,
} from './Login.styled';

//HOC - High Order Component

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { email, password };
    dispatch(loginThunk(credentials))
      .unwrap()
      .then(res => {
        toast.success(`Hello, ${res.user.name}`);
      })
      .catch(err => {
        toast.error('Try another data!!');
      });
  };

  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} />;
  }

  return (
    <section>
      <StyledLoginDiv>
        <h1>Login</h1>
        <StyledLoginForm onSubmit={handleSubmit}>
          <StyledLoginInput
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div>
            <StyledLoginButton type="submit">Login</StyledLoginButton>
          </div>
          <span>
            You are not registered yet?
            <Link to="/register">Go to register form</Link>
          </span>
        </StyledLoginForm>
      </StyledLoginDiv>
    </section>
  );
};
