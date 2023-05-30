import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../utils/consts';
import '../styles.css'
import { createPetAndRequest } from '../http/requestAPI';
import jwtDecode from 'jwt-decode';

const GivePetForm = observer(() => {
    const navigate = useNavigate()
    const [petType, setPetType] = useState('')
    const [petName, setPetName] = useState('')
    const [petBreed, setPetBreed] = useState('')
    const [petGender, setPetGender] = useState('')
    const [petAge, setPetAge] = useState('')
    const [petIllness, setPetIllness] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [purpose, setPurpose] = useState('')
    const [file, setFile] = useState(null)

    const selectFile = e => {
        //console.log(e.target.files[0])
        setFile(e.target.files[0])
    }

    const newRequestPet = async() => {
        let userToken = localStorage.getItem('token')
        let req_client_id = jwtDecode(userToken).id
        createPetAndRequest(petType, petName, petBreed, petGender, `${petAge}`, petIllness, req_client_id, purpose, file).then(data => navigate(HOME_ROUTE))
    }

    return (
        <Container className="login_form" >
            <Card style={{width: 600}} className='card_form'>
                <h2 className="title_form">Отдать питомца</h2>
                <Form className="form">
                    <Form.Control
                        className="placehldr"
                        placeholder="Кошка или Собака"
                        value={petType}
                        onChange={e => setPetType(e.target.value)}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Кличка питомца"
                        value={petName}
                        onChange={e => setPetName(e.target.value)}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Порода питомца"
                        value={petBreed}
                        onChange={e => setPetBreed(e.target.value)}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Пол питомца"
                        value={petGender}
                        onChange={e => setPetGender(e.target.value)}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Возраст питомца"
                        value={petAge}
                        onChange={e => setPetAge(Number(e.target.value))}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Заболевания питомца"
                        value={petIllness}
                        onChange={e => setPetIllness(e.target.value)}
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
                    <Form.Control
                        className="placehldr"
                        type='file'
                        onChange={selectFile}
                    />
                    
                    <Row className="row_form">
                        <Button className="button_with_contur" onClick={newRequestPet}>
                            Отправить заявку
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default GivePetForm;