import React, { useReducer } from 'react';
import AuthReducer from './authReducer';
import AuthContext from './authContext';

import axiosClient from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import {
  REGISTER_OK,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_OK,
  LOGIN_ERROR,
  CLOSE_SESSION,
} from '../../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    autenticated: null,
    user: null,
    msg: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Functions
  const register = async (data) => {
    try {
      const response = await axiosClient.post('/api/users', data);
      dispatch({
        type: REGISTER_OK,
        payload: response.data,
      });
      authUser();
    } catch (error) {
      console.log(error.response.data.msg);
      const alert = {
        msg: error.response.data.msg,
        category: 'alert-error',
      };
      dispatch({
        type: REGISTER_ERROR,
        payload: alert,
      });
    }
  };
  // Return registered user
  const authUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      // Function to send token to backend
      tokenAuth(token);
    }
    try {
      const response = await axiosClient.get('/api/auth');
      dispatch({
        type: GET_USER,
        payload: response.data.user,
      });
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  // Login
  const login = async (data) => {
    try {
      const response = await axiosClient.post('/api/auth', data);
      dispatch({
        type: LOGIN_OK,
        payload: response.data,
      });
      // Get the user
      authUser();
    } catch (error) {
      console.log(error.response.data.msg);
      const alert = {
        msg: error.response.data.msg,
        category: 'alert-error',
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alert,
      });
    }
  };
  // Logout
  const logout = () => {
    dispatch({
      type: CLOSE_SESSION,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticated: state.autenticated,
        user: state.user,
        msg: state.msg,
        loading: state,
        register,
        authUser,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
