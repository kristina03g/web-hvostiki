import React from 'react';
import { observer } from 'mobx-react-lite';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import '../styles.css'

const HistoryCard = observer(({hist}) => {
    return (
    <Row >
        <Col>
            <Image width={100} heigth={100} src={hist.pet.pet_photo}>
            </Image>
        </Col>
        <Col>
            <div>{hist.pet.pet_name}</div>
        </Col>
        <Col>
            <div>{hist.pet.pet_breed}</div>
        </Col>
        <Col>
            <div>{hist.pet.pet_gender}</div>
        </Col> 
        <Col>
            {(hist.pet.pet_age === 1 && <p>{hist.pet.pet_age} год</p>) || 
            (hist.pet.pet_age === 2 && <p>{hist.pet.pet_age} года</p>) ||
            (hist.pet.pet_age === 3 && <p>{hist.pet.pet_age} года</p>) ||
            (hist.pet.pet_age === 4 && <p>{hist.pet.pet_age} года</p>) ||
            <p>{hist.pet.pet_age} лет</p>}
        </Col> 
        <Col>
            <div>{hist.pet.pet_status}</div>
        </Col> 
        <Col>
            <div>{hist.request_date}</div>
        </Col> 
        <Col>
            <div>{hist.request_status}</div>
        </Col> 
    </Row>
      
    );
});

export default HistoryCard;