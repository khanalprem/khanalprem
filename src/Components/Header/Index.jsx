import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoCloseCircleOutline } from 'react-icons/io5';
import Menu from './Menu';
import logo from '../../assets/images/profile.jpg';
import ThemeSwitcher from '../Common/ThemeSwitcher';
import PmcvData from '../PmcvData';

const Index = () => {
  const [isActive, setActive] = useState('home');
  const [state, setState] = useState({ active: false });
  const toggleClass = (key, value) => {
    setState({ ...state, [key]: value });
  };

  const menuContent = PmcvData.filter((items) => items.name === 'menu')[0];
  return (
    <header className="header pt-10 pb-10">
      <div className="container">
        <div className="is-flex is-between is-align-center header-wrap is-gap-30">
          <Link
            to="/"
            className="pm-logo is-flex is-start is-align-center is-gap-10"
          >
            <figure>
              <img src={logo} alt="pm logo" />
            </figure>
            <span className="fs-h4 fw-700">Prem</span>
          </Link>
          <div
            className={
              !state.active
                ? 'is-flex is-end is-align-center menu is-gap-15'
                : 'is-flex is-end is-align-center menu menu_active'
            }
          >
            <nav className="is-grow">
              <div className="is-flex is-end is-align-center toggle-menu_close ">
                <div
                  className="toggle-menu  is-flex is-center is-column is-align-center"
                  onClick={() => {
                    toggleClass('active', !state.active);
                  }}
                >
                  {!state.active ? <IoMenu /> : <IoCloseCircleOutline />}
                </div>
              </div>
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
            <div className="is-flex is-end is-align-center is-gap-15">
              <ThemeSwitcher />
              <div
                className="toggle-menu is-flex is-center is-column is-align-center"
                onClick={() => {
                  toggleClass('active', !state.active);
                }}
              >
                {!state.active ? <IoMenu /> : <IoCloseCircleOutline />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
