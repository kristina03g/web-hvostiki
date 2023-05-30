import React from 'react';
import { observer } from 'mobx-react-lite';
import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { TAKE_CAT_ROUTE, TAKE_DOG_ROUTE } from '../utils/consts';
import '../styles.css'

const PetCard = observer(({pet}) => {
    const navigate = useNavigate()
    let age = pet.pet_age
    return ( 
        <Col md={3}>
            <Card className='card_style'>
                <Card.Img variant="top" height={250} src={process.env.REACT_APP_API_URL + pet.pet_photo} />
                <Card.Body className='card_body'>
                    <Card.Title className='text_red_center'>{pet.pet_name}</Card.Title>
                    <Card.Text className='text_white_center'>
                        <p>{pet.pet_breed}</p>
                        <p>{pet.pet_gender}</p>
                        {(age === 1 && <p>{age} год</p>) || 
                        (age === 2 && <p>{age} года</p>) ||
                        (age === 3 && <p>{age} года</p>) ||
                        (age === 4 && <p>{age} года</p>) ||
                        <p>{age} лет</p>}
                    </Card.Text>
                    {pet.pet_type == 'Кошка' && <Button className="button_center" onClick={() => navigate(TAKE_CAT_ROUTE + '/' + pet.pet_id)}>Забрать</Button>}
                    {pet.pet_type == 'Собака' && <Button className="button_center" onClick={() => navigate(TAKE_DOG_ROUTE + '/' + pet.pet_id)}>Забрать</Button>}
                </Card.Body>
            </Card>            
        </Col>
    );
});

export default PetCard;