import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const RequestCard = ({request}) => {
    let age = (request.age === 1 && <div>{request.age} год</div>) || 
    (request.age === 2 && <div>{request.age} года</div>) ||
    (request.age === 3 && <div>{request.age} года</div>) ||
    (request.age === 4 && <div>{request.age} года</div>) ||
    <div>{request.age} лет</div>
    console.log(age)
    return (
    <Row >
        <Col>
            <p>Кличка питомца: {request.name}<br />
            Порода питомца: {request.breed}<br />
            Пол питомца: {request.gender}<br />
            Возраст питомца: {age}
            Болезни питомца: {request.illness}<br /><br />
            Имя клиента: {request.client_name}<br />
            День рождения клиента: {request.client_bday}<br />
            Номер телефона клиента: {request.client_phone}<br />
            Адрес клиента: {request.client_address}<br /><br />
            Тип заявки: {request.type}<br />
            Дата заявки: {request.date}<br />
            Причина заявки: {request.purpose}</p>
        </Col>
        <Col>
            <Button>V</Button>
        </Col>
        <Col>
            <Button>X</Button>
        </Col>
    </Row>
      
    );
};

export default RequestCard;