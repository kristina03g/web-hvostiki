import React from 'react';
import {useLocation } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import { Container } from 'react-bootstrap';
import ClientNavBar from "../components/ClientNavBar";
import '../styles.css'
import { registration } from '../http/userAPI';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE


    return (
        <Container>
            <ClientNavBar />
            {isLogin ? <LoginForm /> : <RegistrationForm />}
        </Container>
    );
};

export default Auth;