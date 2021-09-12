import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navToggle from '../utils/navtoggle';

const NavBar = () => {
  const lc = useLocation().pathname;
  useEffect(() => {
    navToggle();
  }, []);
  return (
    <nav>
      <h1>User App</h1>
      <ul>
        <li className={lc === '/' ? 'active nav-link' : 'nav-link'}>
          <Link to="/">Home</Link>
        </li>
        <li className={lc === '/UserAdd' ? 'active nav-link' : 'nav-link'}>
          <Link to="/UserAdd">Add User</Link>
        </li>
        <li className={lc == '/UserEdit' ? 'active nav-link' : 'nav-link'}>
          <Link to="/UserEdit">Edit List</Link>
        </li>
      </ul>
      <i className="fas fa-bars fa-3x nav-menu-toggler"></i>
    </nav>
  );
};

export default NavBar;
