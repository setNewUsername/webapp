import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {authRoutes} from "../routes";

const AppRouter = () => {

    const isAuth = false;

    return (
        <Switch>
            {authRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} />
            )}
        </Switch>
    );
};

export default AppRouter;