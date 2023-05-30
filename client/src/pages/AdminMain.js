import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { REQUESTS_ROUTE, STATISTICS_ROUTE } from '../utils/consts';
import AdminNavBar from "../components/AdminNavBar";
import '../styles.css'

const AdminMain = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <AdminNavBar />
            <Row className='admin_header'>
                <Col>
                    <Button className='button' onClick={() => navigate(REQUESTS_ROUTE)}>Просмотреть заявки</Button>
                </Col>
                <Col>
                    <Button className='button' onClick={() => navigate(STATISTICS_ROUTE)}>Просмотреть статистику</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminMain;