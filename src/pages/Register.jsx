import { registerThunk } from 'Redux/Auth/operations';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Alexey
// Alexey100500@mail.com
// qwerty123456

export const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { name, password, email };
    dispatch(registerThunk(credentials))
      .unwrap()
      .then(res => {
        navigate(location.state?.from || '/');
        toast.success(`Registration successful., ${res.user.name}`);
      })
      .catch(err => {
        toast.error('Try another data!');
      });
  };
  return (
    <section>
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter your name...."
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="Enter your email...."
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Enter your pass...."
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div>
            <button type="submit">Register</button>
          </div>
          <span>
            Are you already registered?
            <Link to="/login">Go to login form</Link>
          </span>
        </form>
      </div>
    </section>
  );
};
