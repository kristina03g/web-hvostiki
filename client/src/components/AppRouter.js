import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { adminRoutes, clientRoutes, userRoutes } from '../routes';
import { ERROR_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { Context } from '../index';
import {observer} from "mobx-react-lite";
import '../styles.css'

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    return (
        <Routes>
            <Route path='/' element={<Navigate to={LOGIN_ROUTE}/>}/>
            {userRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={ERROR_ROUTE}/>}/>
        </Routes>
    );
});

export default AppRouter;