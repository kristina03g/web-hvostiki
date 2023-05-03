import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';
import { HOME_ROUTE } from '../utils/consts';
import {observer} from "mobx-react-lite";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ClientNav = observer(() => {
    const navigate = useNavigate()
    const location = useLocation()
    const isHome = location.pathname === HOME_ROUTE
    return (
        !isHome && <Button onClick={() => navigate(HOME_ROUTE)}>На главную</Button>
    );
});

export default ClientNav;