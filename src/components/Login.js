import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
      <Link to='/'>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          className='login__logo'
        />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className='login__signInButton'>Sign In</button>
        </form>
        <p>
          By signing-in you agree to Amazon Clone's 
          Conditions of Use & Sale. Please 
          see our Privacy Notice, our Cookies Notice 
          and our Interest Based Ads.
        </p>
        <button className='login__registerButton'>Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Login;
