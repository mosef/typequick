import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TypeWriter from '../../img/TypeWriter.png';
import SpaceBar from '../../img/SpaceBar.png';
import { HeaderImg } from './HeaderItems';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <header />
        <div className="headerText">
          <h1>TypeQuick<span>_</span></h1>
          <h2>A learning tool to code faster</h2>
        </div>
        <HeaderImg image={TypeWriter} name="TypeWriter" />
        <Link to="/login" className="login-Link">
          <h3>Login</h3>
          <HeaderImg image={SpaceBar} name="SpaceBar" />
        </Link>
      </div>
    );
  }
}

export default Header;
