import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../utils/consts';
import '../styles.css'

const DonationForm = () => {
    const navigate = useNavigate()
    return (
        <Container className='login_form' >
            <Card style={{width: 600}} className='card_form'>
                <h2 className="title_form">Пожертвования</h2>
                <Form className="form">
                    <Form.Control
                        className="placehldr"
                        placeholder="Ваше имя"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Сумма пожертвования в рублях"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Цель пожертвования"
                    />
                    <Row className="row_form">
                        <Button className="button_with_contur" onClick={() => navigate(HOME_ROUTE)}>
                            Помочь приюту
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default DonationForm;