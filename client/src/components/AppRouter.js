import React from 'react';
import {Routes, Route} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import NotFound from "../page/NotFound";

const AppRouter = () => {

    const isAuth = true;

    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} />
            )}
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
};

export default AppRouter;