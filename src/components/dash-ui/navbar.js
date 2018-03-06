import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="dash-nav">
    <ul>
      <li><Link to="/dash">Dash</Link></li>
      <li><Link to="/lesson">Lesson</Link></li>
      <li><Link to="/challenge">Challenge</Link></li>
      <li><Link to="/logout">Logout</Link></li>
    </ul>
  </div>
);

export default Navbar;
