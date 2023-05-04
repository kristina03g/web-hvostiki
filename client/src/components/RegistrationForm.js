import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE} from '../utils/consts';
import { useNavigate } from 'react-router-dom';
import '../styles.css'

const RegistrationForm = () => {
    const navigate = useNavigate()
    return (
        <Container className="login_form">
            <Card style={{width: 600}} className='card_form'>
                <h2 className="title_form">Регистрация</h2>
                <Form className="form">
                    <Form.Control
                        className="placehldr"
                        placeholder="Имя"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Дата рождения"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Почта"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Номер телефона"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Адрес"
                    />
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
                            Уже есть аккаунт? <NavLink className='red_link' to={LOGIN_ROUTE}>Вход</NavLink>
                        </div>
                        <Button className="button_with_contur" onClick={() => navigate(HOME_ROUTE)}>
                            Зарегистрироваться
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default RegistrationForm;