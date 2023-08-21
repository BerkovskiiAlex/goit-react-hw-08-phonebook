import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API = axios.create({
  baseUrl: 'https://goit-task-manager.herokuapp.com/',
});

const setToken = token => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  API.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  'auth/reg',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post('users/signup', credentials);
      console.log(data);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
