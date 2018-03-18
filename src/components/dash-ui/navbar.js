import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './icon';
import { ICONS } from './iconConstants';

const Navbar = () => (
  <div className="dash-nav">
    <ul>
      <li>
        <Link to="/dash">
          <Icon icon={ICONS.CHART} size={48} color="#09EEAF" />
      Dash
        </Link>
      </li>
      <li>
        <Link to="/lesson">
          <Icon icon={ICONS.BOOK} size={48} color="#09EEAF" />
      Lesson
        </Link>
      </li>
      <li>
        <Link to="/challenge">
          <Icon icon={ICONS.CODE} size={48} color="#09EEAF" />
      Challenge
        </Link>
      </li>
      <li>
        <Link to="/logout">
          <Icon icon={ICONS.EXIT} size={48} color="#09EEAF" />
      Logout
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
