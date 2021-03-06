import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './icon';
import { ICONS } from './iconConstants';
import { logout } from '../../actions/logout';

const Navbar = () => (
  <div className="dash-nav">
    <ul className="menu-grid">
      <li className="dash-l">
        <Link to="/dash">
          <Icon icon={ICONS.CHART} size={48} color="#09EEAF" />
      Dash
        </Link>
      </li>
      <li className="lesson-l">
        <Link to="/lesson">
          <Icon icon={ICONS.BOOK} size={48} color="#09EEAF" />
      Lesson
        </Link>
      </li>
      <li className="chall-l">
        <Link to="/challenge">
          <Icon icon={ICONS.CODE} size={48} color="#09EEAF" />
      Challenge
        </Link>
      </li>
      <li className="logout-l">
        <Link to="/" onClick={() => { logout(); }}>
          <Icon icon={ICONS.EXIT} size={48} color="#09EEAF" />
      Logout
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
