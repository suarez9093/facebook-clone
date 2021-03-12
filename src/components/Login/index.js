import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { context } from '../../context/context';
import './Login.css';
function Login() {
  const { signIn } = useContext(context);
  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png'
          alt=''
        />

        <img
          src='https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png'
          alt=''
        />
      </div>
      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
