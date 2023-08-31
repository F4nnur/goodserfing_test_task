import React from 'react';
import Header from '../../components/UI/header/Header';
import s from './styles.module.scss';
import Menu from '../../components/UI/Menu/Menu';
import { ICONS } from '../../constants/icons';

const MainPage: React.FC = () => {
  const items = [{ icon: ICONS.desktopIcon, value: 'Рабочий стол' },
    { icon: ICONS.vacancy, value: 'Вакансии' },
    { icon: ICONS.requests, value: 'Заявки' },
    { icon: ICONS.calendar, value: 'Календарь' },
    { icon: ICONS.organization, value: 'Организации' },
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