import React from 'react';
import PmcvData from '../PmcvData';

const SocialIcons = () => {
  const socialItems = PmcvData.filter(
    (items) => items.name === 'social icons'
  )[0];
  return (
    <ul className="is-flex is-align-center is-center is-gap-10 mt-15 social-icons">
      {socialItems.icons.map((items) => (
        <li>
          <a
            href={items.iconUrl}
            className="is-square is-square_xs"
            target="_blank"
          >
            {items.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
