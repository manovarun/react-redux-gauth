import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuthUser } from '../features/AuthSlice';

const Home = () => {
  const { user, isSuccess } = useSelector(({ Auth }) => Auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSuccess) {
      dispatch(getAuthUser());
    }

    if (!user) {
      navigate('/login');
    }
  }, [dispatch, isSuccess, user, navigate]);

  return (
    <section className='section-about d-flex justify-content-center align-items-center'>
      <div className='container'>
        <h2 className='mb-4'>
          Welcome, <span className='text-success'>{user && user.name}</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
          lacusat augue aliquet posuere. Aliquam fringilla elementum varius.
          Nunclobortis nisl in nibh commodo, quis placerat nisi feugiat.
        </p>
      </div>
    </section>
  );
};

export default Home;
