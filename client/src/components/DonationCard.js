import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../styles.css'
import { observer } from 'mobx-react-lite';

const DonationCard = observer(({donation}) => {
    return (
    <Row >
        <Col>
            <div>{donation.client.client_name}</div>
        </Col>
        <Col>
            <div>{donation.amount} руб.</div>
        </Col>
        <Col>
            <div>{donation.donation_date}</div>
        </Col> 
    </Row>
    );
});

export default DonationCard;