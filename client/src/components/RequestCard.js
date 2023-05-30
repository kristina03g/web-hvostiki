import React, {useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Col, Row } from 'react-bootstrap';
import '../styles.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { ACCEPTED_REQUESTS_ROUTE, APPROVED_REQUESTS_ROUTE, REJECTED_REQUESTS_ROUTE } from '../utils/consts';
import { updateAcceptedRequestsToOk, updateAcceptedRequestsToCancel, updateApprovedRequestsToOk, updateApprovedRequestsToCancel, updateRejectedRequestsToCancel } from '../http/requestAPI';

const RequestCard = observer((props) => {
    const location = useLocation()
    const isAccepted = location.pathname === ACCEPTED_REQUESTS_ROUTE
    const isApproved = location.pathname === APPROVED_REQUESTS_ROUTE
    const isRejected = location.pathname === REJECTED_REQUESTS_ROUTE

    const changeStatusOk = async() => {
        if (isAccepted) {
            updateAcceptedRequestsToOk(props.request.request_id)
            props.onDelete(props.request.request_id)
            
        }
        if (isApproved) {
            updateApprovedRequestsToOk(props.request.request_id)
            props.onDelete(props.request.request_id)
        }
        if (isRejected) {
            updateRejectedRequestsToCancel(props.request.request_id)
            props.onDelete(props.request.request_id)
        }
    }

    const changeStatusCancel = async() => {
        if (isAccepted) {
            updateAcceptedRequestsToCancel(props.request.request_id)
            props.onDelete(props.request.request_id)
        }
        if (isApproved) {
            updateApprovedRequestsToCancel(props.request.request_id)
            props.onDelete(props.request.request_id)
        }
        if (isRejected) {
            updateRejectedRequestsToCancel(props.request.request_id)
            props.onDelete(props.request.request_id)
        }
    }

    let age = (props.request.pet.pet_age === 1 && <div>{props.request.pet.pet_age} год</div>) || 
    (props.request.pet.pet_age === 2 && <div>{props.request.pet.pet_age} года</div>) ||
    (props.request.pet.pet_age === 3 && <div>{props.request.pet.pet_age} года</div>) ||
    (props.request.pet.pet_age === 4 && <div>{props.request.pet.pet_age} года</div>) ||
    <div>{props.request.pet.pet_age} лет</div>
    return (
    <Row >
        <Col>
            <p>Кличка питомца: {props.request.pet.pet_name}<br />
            Порода питомца: {props.request.pet.pet_breed}<br />
            Пол питомца: {props.request.pet.pet_gender}<br />
            Возраст питомца: {age}
            Болезни питомца: {props.request.pet.pet_illness}<br /><br />
            Имя клиента: {props.request.client.client_name}<br />
            День рождения клиента: {props.request.client.client_bday}<br />
            Номер телефона клиента: {props.request.client.client_phone}<br />
            Адрес клиента: {props.request.client.client_address}<br /><br />
            Тип заявки: {props.request.request_type}<br />
            Дата заявки: {props.request.request_date}<br />
            Причина заявки: {props.request.purpose}</p>
        </Col>
        <Col>
            <Button className='button_mrgn_top' onClick={changeStatusOk}>V</Button>
        </Col>
        <Col>
            <Button className='button_mrgn_top' onClick={changeStatusCancel}>X</Button>
        </Col>
    </Row>
      
    );
});

export default RequestCard;