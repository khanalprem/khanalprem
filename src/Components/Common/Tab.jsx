import React, { useState } from 'react';

const Tab = ({ state, setState, name }) => {
  const toggleItems = (key, value) => {
    setState({ ...state, [key]: value });
  };

  return (
    <li>
      <a
        role="tab"
        tabIndex="0"
        className={state.active === name ? 'is-active' : ''}
        onClick={() => {
          toggleItems('active', name);
        }}
      >
        {name}
      </a>
    </li>
  );
};

export default Tab;
