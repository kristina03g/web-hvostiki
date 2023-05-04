import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../utils/consts';
import '../styles.css'

const TakePetForm = () => {
    const navigate = useNavigate()
    return (
        <Container className="login_form" >
            <Card style={{width: 600}} className='card_form'>
                <h2 className="title_form">Забрать питомца</h2>
                <Form className="form">
                    <Form.Control
                        className="placehldr"
                        placeholder="Кличка питомца"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Порода питомца"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Пол питомца"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Возраст питомца"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Ваше имя"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Ваш возраст"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Ваш номер телефона"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Ваш адрес"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Причина заявки"
                    />
                    <Row className="row_form">
                        <Button className="button_with_contur" onClick={() => navigate(HOME_ROUTE)}>
                            Отправить заявку
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default TakePetForm;