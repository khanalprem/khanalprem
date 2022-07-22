import React, { useState } from 'react';
import Menu from './Menu';
import logo from '../../assets/images/profile.jpg';
import PmcvData from '../PmcvData';

const Index = () => {
  const [isActive, setActive] = useState('home');

  const menuContent = PmcvData.filter((items) => items.name === 'menu')[0];
  return (
    <header className="header pt-10 pb-10">
      <div className="container">
        <div className="is-flex is-between is-align-center header-wrap is-gap-30">
          <a
            href=""
            className="pm-logo is-flex is-start is-align-center is-gap-10"
          >
            <figure>
              <img src={logo} alt="pm logo" />
            </figure>
            <span className="fs-h4 fw-700">Prem</span>
          </a>
          <div className="is-flex is-end is-align-center menu">
            <nav className="is-grow">
              <ul className="menu-items">
                {menuContent.menuItems.map((items) => (
                  <Menu
                    key={items.id}
                    isActive={isActive}
                    setActive={setActive}
                    to={items.to}
                    icon={items.icon}
                    name={items.name}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
