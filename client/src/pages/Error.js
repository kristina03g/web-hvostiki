import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Container} from 'react-bootstrap';
import logo from '../media/logo.png'
import '../styles.css'


const Error = () => {
    return (
        <Container>
            <Navbar className='navbar_red'>
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
                    <h2 className='text_red'>Хвостики</h2>
                </Nav>
            </Container>
      </Navbar>
      <h1 className='header'>ERROR 404 NOT FOUND</h1>
            <h3 className='text_red_center'>Упс.. Что-то пошло не так!</h3>
        </Container>
    );
};

export default Error;