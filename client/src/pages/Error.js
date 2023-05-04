import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Container} from 'react-bootstrap';
import logo from '../media/logo.png'
import '../styles.css'


const Error = () => {
    return (
        <Container>
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
            </Container>
      </Navbar>
      <h1>ERROR 404 NOT FOUND</h1>
            <h3>Упс.. Что-то пошло не так!</h3>
        </Container>
    );
};

export default Error;