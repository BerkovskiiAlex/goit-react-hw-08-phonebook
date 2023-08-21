import { logoutThunk } from 'Redux/Auth/operations';
import { selectUser } from 'Redux/Auth/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const UserMenu = () => {
  const { email, name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleExit = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        navigate('/login');
        toast.success(`Goobye, ${name}!`);
      });
  };
  return (
    <div>
      <p>{email}</p>
      <button onClick={handleExit}>Logout</button>
    </div>
  );
};
