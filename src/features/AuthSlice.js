import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authReset: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
      state.token = '';

      if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
      }
    },
    authLogin: (state, action) => {
      const userObject = jwt_decode(action.payload.credential);
      localStorage.setItem('user', JSON.stringify(userObject));
      const { name, sub, picture } = userObject;
      state.user = { name, sub, picture };
    },
    getAuthUser: (state, action) => {
      state.isLoading = true;
      if (localStorage.getItem('user')) {
        state.user = JSON.parse(localStorage.getItem('user'));
        state.isLoading = false;
        state.isSuccess = true;
      } else {
        state.isLoading = false;
        state.user = null;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { authReset, authLogin, getAuthUser } = AuthSlice.actions;

export default AuthSlice.reducer;
