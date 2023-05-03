import React from 'react';
import { Col, Row } from 'react-bootstrap';

const DonationCard = ({donation}) => {
    return (
    <Row >
        <Col>
            <div>{donation.name}</div>
        </Col>
        <Col>
            <div>{donation.amount}</div>
        </Col>
        <Col>
            <div>{donation.date}</div>
        </Col> 
    </Row>
    );
};

export default DonationCard;