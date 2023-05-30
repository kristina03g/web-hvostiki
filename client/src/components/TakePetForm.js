import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../utils/consts';
import '../styles.css'
import { fetchOneCat, fetchOneDog } from '../http/petAPI';
import { createWantPetRequest } from '../http/requestAPI';
import jwtDecode from 'jwt-decode';
import { observer } from 'mobx-react-lite';

const TakePetForm = observer((param) => {
    const navigate = useNavigate()
    const [pet, setPet] = useState({info: []})
    const [petName, setPetName] = useState('')
    const [petBreed, setPetBreed] = useState('')
    const [petGender, setPetGender] = useState('')
    const [petAge, setPetAge] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [purpose, setPurpose] = useState('')

    const requestPet = async() => {
        let userToken = localStorage.getItem('token')
        let req_client_id = jwtDecode(userToken).id
        createWantPetRequest(req_client_id, param.id, purpose).then(data => navigate(HOME_ROUTE))
    }

    useEffect(() => {
        if (param.param == 'Кошка') {
            fetchOneCat(param.id).then(data => setPet(data))
        }
        else if (param.param == 'Собака') {
            fetchOneDog(param.id).then(data => setPet(data))
        }
    }, [])

    return (
        <Container className="login_form">
            <Card style={{width: 600}} className='card_form'>
                <h2 className="title_form">Забрать питомца</h2>
                <Form className="form">
                    <Form.Control
                        className="placehldr"
                        placeholder="Кличка питомца"
                        defaultValue={pet.pet_name}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Порода питомца"
                        defaultValue={pet.pet_breed}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Пол питомца"
                        defaultValue={pet.pet_gender}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Возраст питомца"
                        defaultValue={pet.pet_age}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Ваш возраст"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Ваш номер телефона"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Ваш адрес"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Причина заявки"
                        value={purpose}
                        onChange={e => setPurpose(e.target.value)}
                    />
                    <Row className="row_form">
                        <Button className="button_with_contur" onClick={requestPet}>
                            Отправить заявку
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default TakePetForm;