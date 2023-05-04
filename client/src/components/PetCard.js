import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { TAKE_PET_ROUTE } from '../utils/consts';
import '../styles.css'

const PetCard = ({pet}) => {
    const navigate = useNavigate()
    let age = pet.age
    return (
        <Col md={3}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={250} src={pet.photo} />
                <Card.Body>
                    <Card.Title>{pet.name}</Card.Title>
                    <Card.Text>
                        <p>{pet.breed}</p>
                        <p>{pet.gender}</p>
                        {(age === 1 && <p>{age} год</p>) || 
                        (age === 2 && <p>{age} года</p>) ||
                        (age === 3 && <p>{age} года</p>) ||
                        (age === 4 && <p>{age} года</p>) ||
                        <p>{age} лет</p>}
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate(TAKE_PET_ROUTE)}>Забрать</Button>
                </Card.Body>
            </Card>            
        </Col>
    );
};

export default PetCard;