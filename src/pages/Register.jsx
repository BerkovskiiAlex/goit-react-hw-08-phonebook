import { registerThunk } from 'Redux/Auth/operations';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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
    dispatch(registerThunk(credentials));
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
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Enter your pass...."
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div>
            <button type="submit">Register</button>
          </div>
          <Link to="/login">Are you already registered? Go to login form</Link>
        </form>
      </div>
    </section>
  );
};
