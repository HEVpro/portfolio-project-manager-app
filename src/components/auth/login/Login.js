import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../../context/alerts/alertContext';
import AuthContext from '../../../context/auth/authContext';
import './styles.css';

const Login = (props) => {
  // Geth the values from the context
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { login, msg, autenticated } = authContext;

  // Just in case that the user was logged successfully or another login error.
  useEffect(() => {
    if (autenticated) {
      props.history.push('/projects');
    }
    if (msg) {
      showAlert(msg.msg, msg.category);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msg, autenticated, props.history]);

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
    // Validate not empty fields
    if (email.trim() === '') {
      showAlert('All the fields are required!', 'alert-error');
    }
    login({ email, password });
  };
  return (
    <div className="user-form">
      {alert ? <div className={`${alert.category}`}>{alert.msg}</div> : null}
      <div className="form">
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="password">Password</label>
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
