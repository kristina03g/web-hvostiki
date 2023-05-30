import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dog from '../media/dog.jpeg'
import cat from '../media/cat.jpeg'
import { useNavigate } from 'react-router-dom';
import { ALL_CATS_ROUTE, ALL_DOGS_ROUTE, DONATION_ROUTE, GIVE_PET_ROUTE } from '../utils/consts';
import ClientNavBar from "../components/ClientNavBar";
import '../styles.css'

const Home = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <ClientNavBar />
            <Row className='row_style'>
                <Card className='card_style_margin' >
                    <Card.Img variant="top" height={450} src={cat} />
                    <Card.Body className='card_body'>
                        <Button className='button_center' onClick={() => navigate(ALL_CATS_ROUTE)}>Взять кошку</Button>
                    </Card.Body>
                </Card>

                <Card className='card_style_margin'>
                    <Card.Img variant="top" height={450} src={dog} />
                    <Card.Body className='card_body'>
                        <Button className='button_center' onClick={() => navigate(ALL_DOGS_ROUTE)}>Взять собаку</Button>
                    </Card.Body>
                </Card>
            </Row>
            <Row className="header">
                <Col>
                    <Button className='button' onClick={() => navigate(GIVE_PET_ROUTE)}>Отдать питомца</Button>
                </Col>
                <Col>
                    <Button className='button' onClick={() => navigate(DONATION_ROUTE)}>Помочь приюту</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;