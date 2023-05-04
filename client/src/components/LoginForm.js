import React, { useContext } from 'react';
import {Context} from "../index";
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import {ADMIN_MAIN_ROUTE, HOME_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import {useNavigate} from 'react-router-dom'
import '../styles.css'

const LoginForm = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Container className="login_form">
            <Card style={{width: 600}} className='card_form'>
                <h2 className="title_form">Авторизация</h2>
                <Form className="form">
                    <Form.Control
                        className="placehldr"
                        placeholder="Логин"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Пароль"
                    />
                    <Row className="row_form">
                        <div className='blText_redBcgrnd'>
                            Нет аккаунта? <NavLink className='red_link' to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                        </div>
                        {!user.isAdmin && <Button className="button_with_contur" onClick={() => navigate(HOME_ROUTE)}>
                            Войти
                        </Button>
                        }
                        {user.isAdmin && <Button className="button_with_contur" onClick={() => navigate(ADMIN_MAIN_ROUTE)}>
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