import React, { useEffect, useState } from 'react';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from '../features/AuthSlice';

const GoogleAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(({ Auth }) => Auth);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  const responseGoogle = (response) => {
    dispatch(authLogin(response));
  };

  const errorGoogle = (error) => {
    console.log(error);
  };

  return (
    <div className='d-flex justify-content-start align-items-center h-screen overflow-hidden'>
      <div className='col relative w-100 h-100'>
        <video
          src={shareVideo}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className='w-100 h-100 object-cover'
        />
        <div className='absolute d-flex flex-column justify-content-center align-items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} width='130px' alt='logo' />
          </div>
          <div className='shadow'>
            <GoogleLogin
              render={(renderProps) => (
                <button
                  type='button'
                  className=''
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className='' /> Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={errorGoogle}
              cookiePolicy='single_host_origin'
            />
            {/* <Button variant='danger' onClick={logOut}>
              Logout
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;
