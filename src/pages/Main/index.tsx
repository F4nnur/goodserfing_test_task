import React from 'react';
import Header from '../../components/UI/header/Header';
import s from './styles.module.scss';
import Menu from '../../components/UI/Menu/Menu';
import { ICONS } from '../../constants/icons';

const MainPage: React.FC = () => {
  const items = [
    { icon: ICONS.desktopIcon, value: 'Рабочий стол', href: '#' },
    { icon: ICONS.vacancy, value: 'Вакансии', href: '#' },
    { icon: ICONS.requests, value: 'Заявки', href: '#' },
    { icon: ICONS.calendar, value: 'Календарь', href: '#' },
    { icon: ICONS.organization, value: 'Организации', href: '#' },
  ];

  return (
    <>
      <Header />
      <div className={s.MainPage}>
        <Menu items={items} />
      </div>
    </>
  );
};

export default MainPage;
