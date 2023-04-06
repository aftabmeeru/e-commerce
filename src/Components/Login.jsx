import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../Styles/Login.scss';

const Login = () => {

  const navigate = useNavigate();
  const backToHome = () => {
    navigate('/');
  }

  return (
    <div className='login-container'>
        <h3>Page Not Found</h3>
        <button onClick={ backToHome }>Back To Home</button>
    </div>
  );
}

export default Login;