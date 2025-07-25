import React, { useEffect } from 'react';
import { replace, useLocation, useNavigate } from 'react-router-dom';

function ReffershHandler({ setIsAuth }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuth(true);
      if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') {
        navigate('/home', { replace: false });
      }
    }
  }, [location, setIsAuth, navigate]);
  return (
    null
  );
}

export default ReffershHandler;
