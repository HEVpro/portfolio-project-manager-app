import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="welcome">
        Hola <p className="username"> Hache!</p>
      </div>
      <nav className="main-navbar">
        <a href="#!">Sign out</a>
      </nav>
    </header>
  );
};

export default Header;
