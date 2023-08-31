import React from 'react';
import Header from "../../components/UI/header/Header";
import s from './styles.module.scss'

const MainPage: React.FC = () => {
    return (
        <>
           <Header/>
            <div className={s.MainPage}>

            </div>
        </>
    );
};

export default MainPage;