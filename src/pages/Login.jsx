import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleAuth from '../components/GoogleAuth';

const Login = () => {
  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}>
      <GoogleAuth />
    </GoogleOAuthProvider>
  );
};

export default Login;
