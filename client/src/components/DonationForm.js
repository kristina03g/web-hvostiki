import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../utils/consts';

const DonationForm = () => {
    const navigate = useNavigate()
    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className="m-auto">Пожертвования</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Ваше имя"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Сумма пожертвования в рублях"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Цель пожертвования"
                    />
                    <Row className="d-flex justify-content-between mt-3">
                        <Button className="mt-3 align-self-end" variant={"outline-success"} onClick={() => navigate(HOME_ROUTE)}>
                            Помочь приюту
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default DonationForm;