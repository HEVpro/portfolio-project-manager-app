import React, { useContext, useEffect } from 'react';
import './header.css';
import AuthContext from '../../../context/auth/authContext';

const Header = () => {
  // Get the auth info
  const authContext = useContext(AuthContext);
  const { user, authUser, logout } = authContext;
  let username = '';
  if (user) {
    username = user.username.toUpperCase();
  }

  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header>
      <div className="welcome">
        <p>
          Hola <span className="username">{username}</span>
        </p>
      </div>
      <nav className="main-navbar">
        <button onClick={() => logout()}>Sign out</button>
      </nav>
    </header>
  );
};

export default Header;
