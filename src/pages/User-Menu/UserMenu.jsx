import { logoutThunk } from 'Redux/Auth/operations';
import { selectUser } from 'Redux/Auth/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StyledDiv } from './UserMenu.styled';

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
    <StyledDiv>
      <p>{email}</p>
      <button onClick={handleExit}>
        Logout
        <IconLogout />
      </button>
    </StyledDiv>
  );
};

function IconLogout(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012 2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h9z" />
    </svg>
  );
}
