import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/login">LogIn</Link></li>
      <li><Link to="/dash">Dash Page</Link></li>
    </ul>
  </nav>
);


export default Navbar;
