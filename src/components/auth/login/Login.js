import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

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
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
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
          <div className="submit-form">
            <input type="submit" className="btn-submit" value="Log in" />
          </div>
        </form>
        <Link to={'/register'} className="link">
          Register Page
        </Link>
      </div>
    </div>
  );
};

export default Login;
