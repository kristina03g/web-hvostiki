import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Container, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import HistoryCard from '../components/HistoryCard';
import ClientNav from '../components/ClientNav';
import NavBar from "../components/NavBar";
import '../styles.css'

const PersonalCabinet = observer(() => {
    const {hist} = useContext(Context)
    return (
        <Container>
            <NavBar />
            <ClientNav />
            <h2 className='header'>
                История заявок
            </h2>
            <ListGroup >
                <ListGroupItem className='list_group' >
                    <Row className="text_red_center">
                        <Col >
                            <div>Фото питомца</div>
                        </Col>
                        <Col>
                            <div>Кличка питомца</div>
                        </Col>
                        <Col>
                            <div>Порода питомца</div>
                        </Col>
                        <Col>
                            <div>Пол питомца</div>
                        </Col> 
                        <Col>
                            <div>Возраст питомца</div>
                        </Col> 
                        <Col>
                            <div>Статус питомца</div>
                        </Col> 
                        <Col>
                            <div>Дата заявки</div>
                        </Col> 
                        <Col>
                            <div>Статус заявки</div>
                        </Col> 
                    </Row>
                </ListGroupItem >
                    {hist.history.map(hist =>
                    <ListGroupItem className='list_group_white'>
                        <HistoryCard key={hist.id} hist={hist}/>
                    </ListGroupItem>
                    )}
            </ListGroup>
        </Container>
    );
});

export default PersonalCabinet;