import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/navigation";
import MainPage from "../pages/Main";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={ROUTES.MAIN} element={<MainPage />} />
        </Routes>
    );
};
export default Router;
