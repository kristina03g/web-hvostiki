import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ACCEPTED_REQUESTS_ROUTE, APPROVED_REQUESTS_ROUTE, REJECTED_REQUESTS_ROUTE, STATISTICS_ROUTE } from '../utils/consts';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import AcceptedReqForm from '../components/AcceptedReqForm';
import ApprovedReqForm from '../components/ApprovedReqForm';
import RejectedReqForm from '../components/RejectedReqForm';
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import '../styles.css'

const Requests = observer(() => {
    const navigate = useNavigate()
    const location = useLocation()
    const isAccepted = location.pathname === ACCEPTED_REQUESTS_ROUTE
    const isApproved = location.pathname === APPROVED_REQUESTS_ROUTE
    const isRejected = location.pathname === REJECTED_REQUESTS_ROUTE
    return (
        <Container>
            <NavBar />
            <Row>
                <Button onClick={() => navigate(STATISTICS_ROUTE)}>Статистика</Button>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => navigate(ACCEPTED_REQUESTS_ROUTE)}>Принятые заявки</Button>
                </Col>
                <Col>
                    <Button onClick={() => navigate(APPROVED_REQUESTS_ROUTE)}>Одобренные заявки</Button>
                </Col>
                <Col>
                    <Button onClick={() => navigate(REJECTED_REQUESTS_ROUTE)}>Отклоненные заявки</Button>
                </Col>
            </Row>
            {isAccepted && <AcceptedReqForm /> || isApproved && <ApprovedReqForm /> || isRejected && <RejectedReqForm/>}
        </Container>
    );
});

export default Requests;