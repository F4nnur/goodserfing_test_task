import React, { useState } from 'react';
import s from './styles.module.scss';
import { item } from '../../../interfaces/menuInterfaces';
import { ICONS } from '../../../constants/icons';

interface MenuProps {
  items: item[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(-1); // Индекс открытого подменю

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (index: number) => {
    if (openSubmenuIndex === index) {
      // Если уже открыто, закрываем подменю
      setOpenSubmenuIndex(-1);
    } else {
      // В противном случае открываем подменю
      setOpenSubmenuIndex(index);
    }
  };

  return (
    <div className={`${s.menu} ${isMenuOpen ? s.menuOpen : ''}`}>
      <div className={s.menu__content}>
        <div className={s.menu__button} onClick={toggleMenu}>
          <img src={isMenuOpen ? ICONS.menuButton : ICONS.arrowRight} alt={'menuButton'} />
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={item.value}>
              <img src={item.icon} alt={'desktopIcon'} />
              <div onClick={() => toggleSubmenu(index)}>{item.value}</div>
              {openSubmenuIndex === index && (
                <ul>
                  <li>Описание</li>
                  <li>Фотогалерея</li>
                  <li>Видеогалерея</li>
                  <li>Команда</li>
                  <li>Отзывы</li>
                </ul>
              )}
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
              <div className={s.support__contentFooterButton}>Написать</div>
              <div>E-mail support@goodsurefing.org</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
