import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { adminRoutes, clientRoutes } from '../routes';
import { ERROR_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { Context } from '../index';

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAdmin && adminRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component/>} exact/>
            )}
             {!user.isAdmin && clientRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={ERROR_ROUTE}/>}/>
        </Routes>
    );
};

export default AppRouter;