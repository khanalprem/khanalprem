import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ to, name, icon, isActive, setActive }) => {
  const toggleClass = (value) => {
    setActive(value);
  };
  return (
    <li
      onClick={() => toggleClass(name)}
      className={isActive === name ? 'is-active' : ''}
    >
      <Link to={to} className="is-flex is-start is-align-center is-gap-10">
        {icon}
        {name}
      </Link>
    </li>
  );
};

export default Menu;
