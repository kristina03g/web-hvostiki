import React, { useContext } from 'react';
import {Context} from "../index";
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import {ADMIN_MAIN_ROUTE, HOME_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Логин"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Пароль"
                    />
                    <Row className="d-flex justify-content-between mt-3">
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                        </div>
                        {!user.isAdmin && <Button className="mt-3 align-self-end" variant={"outline-success"} onClick={() => navigate(HOME_ROUTE)}>
                            Войти
                        </Button>
                        }
                        {user.isAdmin && <Button className="mt-3 align-self-end" variant={"outline-success"} onClick={() => navigate(ADMIN_MAIN_ROUTE)}>
                            Войти
                        </Button>
                        }
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default LoginForm;