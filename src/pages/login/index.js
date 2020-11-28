import React, { useState } from 'react';
import axios from 'axios';
import { setCookie } from '../../utils/cookie';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLoginLoading, setLoginLoading] = useState(false);
  const loginAPIUrl = `${process.env.REACT_APP_API}/auth/login`;
  const onSubmitLogin = () => {
    setLoginLoading(true);
    axios
      .post(loginAPIUrl, {
        email: username,
        password,
      })
      .then((res) => {
        const cookieToken = res.data.data.token;
        const cookieUser = res.data.data.user;
        setCookie('userData', JSON.stringify(cookieUser), 10000);
        setCookie('token', JSON.stringify(cookieToken), 10000);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
      });
  };

  return (
    <div className="loginPage">
      <h2> Login Page</h2>
      <form
        className="login_form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitLogin();
        }}
      >
        <label htmlFor="username">
          Username :
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          Password :
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" disabled={isLoginLoading} />
      </form>
    </div>
  );
};

export default Login;

// Login

// form => post ke server => waiting for response (loading state) =>
// receive response from server => success -> success statement to user
//                              => error -> error statement to user  -> next ngapain user?

// if success - get token from be - save Token to cookie -> redirect ??

// Loading state treatment
// race condition -> unstable connection

// Action A -> Response A  ->  Action B ->  Response B -> success
