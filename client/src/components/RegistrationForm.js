import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE} from '../utils/consts';
import { useNavigate } from 'react-router-dom';
import '../styles.css'

const RegistrationForm = () => {
    const navigate = useNavigate()
    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className="m-auto">Регистрация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Имя"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Дата рождения"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Почта"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Номер телефона"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Адрес"
                    />
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
                            Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Вход</NavLink>
                        </div>
                        <Button className="mt-3 align-self-end" variant={"outline-success"} onClick={() => navigate(HOME_ROUTE)}>
                            Зарегистрироваться
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default RegistrationForm;