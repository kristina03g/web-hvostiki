import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../styles.css'

const DonationCard = ({donation}) => {
    return (
    <Row >
        <Col>
            <div>{donation.name}</div>
        </Col>
        <Col>
            <div>{donation.amount} руб.</div>
        </Col>
        <Col>
            <div>{donation.date}</div>
        </Col> 
    </Row>
    );
};

export default DonationCard;