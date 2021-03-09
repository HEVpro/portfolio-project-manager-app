import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
  });

  const { username, email, password, confirm } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="user-form">
      <div className="form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlfor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Write your username"
              value={username}
              onChange={onChange}
            ></input>
          </div>
          <div className="form-field">
            <label htmlfor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Write your email"
              value={email}
              onChange={onChange}
            ></input>
          </div>
          <div className="form-field">
            <label htmlfor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Write your Password"
              value={password}
              onChange={onChange}
            ></input>
          </div>
          <div className="form-field">
            <label htmlfor="confirm">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Please repeat your password"
              value={confirm}
              onChange={onChange}
            ></input>
          </div>
          <div className="submit-form">
            <input type="submit" className="btn-submit" value="Register" />
          </div>
        </form>
        <Link to={'/'} className="link">
          Return to Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
