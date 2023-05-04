import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import '../styles.css'

const HistoryCard = ({hist}) => {
    return (
    <Row >
        <Col>
            <Image width={100} heigth={100} src={hist.photo}>
            </Image>
        </Col>
        <Col>
            <div>{hist.name}</div>
        </Col>
        <Col>
            <div>{hist.breed}</div>
        </Col>
        <Col>
            <div>{hist.gender}</div>
        </Col> 
        <Col>
            {(hist.age === 1 && <p>{hist.age} год</p>) || 
            (hist.age === 2 && <p>{hist.age} года</p>) ||
            (hist.age === 3 && <p>{hist.age} года</p>) ||
            (hist.age === 4 && <p>{hist.age} года</p>) ||
            <p>{hist.age} лет</p>}
        </Col> 
        <Col>
            <div>{hist.pet_status}</div>
        </Col> 
        <Col>
            <div>{hist.date}</div>
        </Col> 
        <Col>
            <div>{hist.status}</div>
        </Col> 
    </Row>
      
    );
};

export default HistoryCard;