import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../styles.css'

const RegsCard = ({regs}) => {
    return (
    <Row >
            <p>{regs.month}<br />
            Количество новых пользователей: {regs.amount}</p>
    </Row>
    );
};

export default RegsCard;