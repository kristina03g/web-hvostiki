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
            <Card className='card_style'>
                <Card.Img variant="top" height={250} src={pet.photo} />
                <Card.Body className='card_body'>
                    <Card.Title className='text_red_center'>{pet.name}</Card.Title>
                    <Card.Text className='text_white_center'>
                        <p>{pet.breed}</p>
                        <p>{pet.gender}</p>
                        {(age === 1 && <p>{age} год</p>) || 
                        (age === 2 && <p>{age} года</p>) ||
                        (age === 3 && <p>{age} года</p>) ||
                        (age === 4 && <p>{age} года</p>) ||
                        <p>{age} лет</p>}
                    </Card.Text>
                    <Button className="button_center" onClick={() => navigate(TAKE_PET_ROUTE)}>Забрать</Button>
                </Card.Body>
            </Card>            
        </Col>
    );
};

export default PetCard;