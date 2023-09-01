import React, { useState } from 'react';
import s from './styles.module.scss';
import { item } from '../../../interfaces/menuInterfaces';
import { ICONS } from '../../../constants/icons';

interface MenuProps {
  items: item[],
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${s.menu} ${isMenuOpen ? s.menuOpen : ''}`}>
      <div className={s.menu__content}>
        <div className={s.menu__button} onClick={toggleMenu}>
          <img src={isMenuOpen ? ICONS.menuButton : ICONS.arrowRight} alt={'menuButton'} />
        </div>
        <ul>
          {items.map((item) => (
            <li key={item.value}>
              <img src={item.icon} alt={'desktopIcon'} />
              <div>{item.value}</div>
            </li>
          ))}
        </ul>
        <div className={s.support}>
          <div className={s.support__content}>
            <div>
              <img src={ICONS.support} alt={'supportICon'} />
            </div>
            <div className={s.support__contentInfo}>
              <div>Кристина</div>
              <div>Ваш персональный помощник по работе с системой</div>
            </div>
            <div className={s.support__contentFooter}>
              <div className={s.support__contentFooterButton}>
                Написать
              </div>
              <div>
                E-mail support@goodsurefing.org
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;