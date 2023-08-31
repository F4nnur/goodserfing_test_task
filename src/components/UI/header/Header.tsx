import React from 'react';
import s from './styles.module.scss';
import { ICONS } from '../../../constants/icons';

const Header: React.FC = () => {
  return (
    <div className={s.headerContainer}>
      <div className={s.headerLogo}>
        <img
          src={ICONS.logo}
          alt={'logo'}
        />
        <div className={s.headerLanguageChange}>
          <p className={s.headerLanguageButton}>RU</p>
          <img
            src={ICONS.arrow}
            alt={'arrow'}
          />
        </div>
      </div>
      <div className={s.headerRightSide}>
        <div className={s.heartAndMail}>
          <img src={ICONS.heart} alt={'heart'} />
          <img src={ICONS.mail} alt={'mail'} />
        </div>
        <div className={s.userInfo}>
          <div className={s.username}>Владислав</div>
          <img src={ICONS.avatar} alt={'avatar'} />
          <img src={ICONS.avatarArrow} alt={'avatarArrow'} />
        </div>
      </div>
    </div>
  );
};

export default Header;