import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';
import auth from '../../services/auth';

/** Represents Login component for the app */
const LoginComponent = () => {

  /** Set initial username and password as empty strings */
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  /** Hide error when value in the fields changes */
  useEffect(()=>{
    if(userName.length > 0 || password.length > 0)
    setError(false);
  },[userName, password])

  const history = useHistory();

  /** Validate form on submit based on length of the values */
  const validateForm = () => {
    return userName.length > 0 && password.length > 0;
  };

  /** Submit handler for the login form. It calls validateForm() and if success redirects to '/' */
  const handleSubmit = (event) => {
    event.preventDefault();
    const validation = validateForm();
    if (validation) {
      auth.login();
      history.push('/');
    } else {
      setError(true);
    }
  };

  return (
    <div className="container">
      <h1 className="heading center">Welcome Back!</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <ul className="flex-outer">
          {error && (
            <li className="error">Enter username and password to login</li>
          )}
          <li>
            <label htmlFor="first-name">User Name</label>
            <input
              type="text"
              id="user-name"
              placeholder="Enter your user name here"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </li>
          <li>
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password here"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              autoComplete="off"
            />
          </li>
          <li>
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default LoginComponent;
