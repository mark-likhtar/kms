import React from 'react';
import { Link } from 'react-router-dom';

import Routes from 'src/navigation/constants';

const Header = () => {
  return (
    <header className="header">
      <Link to={Routes.BASE}>header</Link>

      <nav>
        <ul className="menu">
          <li>
            <Link to={Routes.PORTFOLIO.BASE}>Портфолио</Link>
          </li>
          <li>
            <Link to={Routes.PROCESS}>Процесс</Link>
          </li>
          <li>
            <Link to={Routes.CONTACT}>Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
