import { loginThunk } from 'Redux/Auth/operations';
import { selectIsLoggedIn } from 'Redux/Auth/selectors';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

//HOC - High Order Component

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { email, password };
    dispatch(loginThunk(credentials))
      .unwrap()
      .then(res => {
        navigate(location.state?.from || '/contacts');
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
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
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
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <span>
        You are not registered yet?
        <Link to="/register">Go to register form</Link>
      </span>
    </section>
  );
};
