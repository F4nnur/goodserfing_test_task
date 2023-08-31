import React, { useState } from 'react';
import s from './styles.module.scss';
import { item } from '../../../interfaces/menuInterfaces';
import { ICONS } from '../../../constants/icons';

interface MenuProps {
  items: item[],
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${s.menu} ${isMenuOpen ? s.menuOpen : ''}`}>
      <div className={s.menu__content}>
        <div className={s.menu__button} onClick={toggleMenu}>
          <img src={ isMenuOpen ? ICONS.menuButton : ICONS.arrowRight} alt={'menuButton'} />
        </div>
        <ul>
          {items.map((item) => (
            <li key={item.value}>
              <img src={item.icon} alt={'desktopIcon'} />
              <div>{item.value}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;