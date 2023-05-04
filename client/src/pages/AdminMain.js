import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { REQUESTS_ROUTE, STATISTICS_ROUTE } from '../utils/consts';
import NavBar from "../components/NavBar";
import '../styles.css'

const AdminMain = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <NavBar />
            <Row>
                <Col>
                    <Button variant="primary" className='mt-3' onClick={() => navigate(REQUESTS_ROUTE)}>Просмотреть заявки</Button>
                </Col>
                <Col>
                    <Button variant="primary" className='mt-3' onClick={() => navigate(STATISTICS_ROUTE)}>Просмотреть статистику</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminMain;