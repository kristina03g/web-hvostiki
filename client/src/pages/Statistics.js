import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ACCEPTED_REQUESTS_ROUTE, APPROVED_REQUESTS_ROUTE, CLIENT_STATISTICS_ROUTE, DONATION_STATISTICS_ROUTE, REJECTED_REQUESTS_ROUTE, REQUESTS_ROUTE, STATISTICS_ROUTE } from '../utils/consts';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import ClientStatForm from '../components/ClientStatForm';
import DonatStatForm from '../components/DonatStatForm';
import { useNavigate } from 'react-router-dom';
import AdminNavBar from "../components/AdminNavBar";
import '../styles.css'

const Statistics = observer(() => {
    const navigate = useNavigate()
    const location = useLocation()
    const isClientStat = location.pathname === CLIENT_STATISTICS_ROUTE
    const isDonatStat = location.pathname === DONATION_STATISTICS_ROUTE
    return (
        <Container>
            <AdminNavBar />
            <Button className='button_home' onClick={() => navigate(REQUESTS_ROUTE)}>Заявки</Button>
            <Row className='header'>
                <Col>
                    {isDonatStat ? <Button className='button_selected' onClick={() => navigate(DONATION_STATISTICS_ROUTE)}>Статистика пожертвований</Button> :
                    <Button className='button' onClick={() => navigate(DONATION_STATISTICS_ROUTE)}>Статистика пожертвований</Button>
                    }
                </Col>
                <Col>
                    {isClientStat ? <Button className='button_selected' onClick={() => navigate(CLIENT_STATISTICS_ROUTE)}>Статистика регистраций</Button> :
                    <Button className='button' onClick={() => navigate(CLIENT_STATISTICS_ROUTE)}>Статистика регистраций</Button>
                    }
                </Col>
            </Row>
            {isClientStat && <ClientStatForm /> || isDonatStat && <DonatStatForm /> }
        </Container>
    );
});

export default Statistics;