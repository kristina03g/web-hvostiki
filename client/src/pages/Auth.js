import React from 'react';
import {useLocation } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import { Container } from 'react-bootstrap';
import NavBar from "../components/NavBar";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container>
            <NavBar />
            {isLogin ? <LoginForm /> : <RegistrationForm />}
        </Container>
    );
};

export default Auth;