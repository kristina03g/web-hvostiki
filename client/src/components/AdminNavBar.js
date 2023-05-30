import React, { useContext } from 'react';
import {Context} from "../index";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';
import { PERSONAL_CABINET_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE  } from '../utils/consts';
import {Button, Container} from 'react-bootstrap';
import {observer} from "mobx-react-lite";
import logo from '../media/logo.png'
import { useNavigate } from 'react-router-dom';
import '../styles.css'
import jwtDecode from 'jwt-decode';

const AdminNavBar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const isReg = location.pathname === REGISTRATION_ROUTE

    return (
        <Navbar className='navbar_red'>
            <Container className='container'>
                <Navbar.Brand>
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav>
                    <h2 className='text_red'>Хвостики</h2>
                </Nav>
                {!isLogin && !isReg &&
                    <Nav className='text_red'>
                        <h6>Вы вошли как администратор</h6>
                    </Nav>
                }
            </Container>
      </Navbar>
    );
});

export default AdminNavBar;