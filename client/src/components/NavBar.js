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

const NavBar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const isReg = location.pathname === REGISTRATION_ROUTE
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav>
                    <h2>Хвостики</h2>
                </Nav>
                {user.isAdmin && !isLogin && !isReg &&
                    <Nav className="ml-auto" style={{color: 'black'}}>
                        <h6>Вы вошли как администратор</h6>
                    </Nav>
                }
                {!user.isAdmin && !isLogin && !isReg &&
                    <Nav className="ml-auto">
                        <Button onClick={() => navigate(PERSONAL_CABINET_ROUTE)}>Личный кабинет</Button>
                    </Nav>
                } 
            </Container>
      </Navbar>
    );
});

export default NavBar;