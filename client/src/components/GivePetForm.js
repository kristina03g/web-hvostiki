import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../utils/consts';
import '../styles.css'

const GivePetForm = () => {
    const navigate = useNavigate()
    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className="m-auto">Отдать питомца</h2>
                <Form className="d-flex flex-column">
                    <Form.Select className='mt-3'>
                        <option>Кошка</option>
                        <option>Собака</option>
                    </Form.Select>
                    <Form.Control
                        className="mt-3"
                        placeholder="Кличка питомца"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Порода питомца"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Пол питомца"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Возраст питомца"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Заболевания питомца"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Ваше имя"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Ваш возраст"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Ваш номер телефона"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Ваш адрес"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Причина заявки"
                    />
                    
                    <Row className="d-flex justify-content-between mt-3">
                        <Button className="mt-3 align-self-end" variant={"outline-success"} onClick={() => navigate(HOME_ROUTE)}>
                            Отправить заявку
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default GivePetForm;