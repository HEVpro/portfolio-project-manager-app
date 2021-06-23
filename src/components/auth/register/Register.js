import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../../context/alerts/alertContext';
import AuthContext from '../../../context/auth/authContext';
import './styles.css';

const Register = (props) => {
  // Geth the values from the context
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { register, msg, autenticated } = authContext;

  // Just in case that the user was registered successfully or the user already exists.
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
    // Validate if there are empty fields
    if (
      username.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirm.trim() === ''
    ) {
      showAlert('All the fields are required', 'alert-error');
      return;
    }
    if (password.length < 6) {
      showAlert('The password must be at least 6 characters', 'alert-error');
      return;
    }
    if (password !== confirm) {
      showAlert('The passwords do not match', 'alert-error');
      return;
    }
    register({ username, email, password });
  };
  return (
    <div className="user-form">
      {alert ? <div className={`${alert.category}`}>{alert.msg}</div> : null}
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
