import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../utils/consts';
import '../styles.css'
import { createDonat } from '../http/donationAPI';
import jwtDecode from 'jwt-decode';


const DonationForm = observer(() => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [purpose, setPurpose] = useState('')

    const newDonation = async() => {
        let userToken = localStorage.getItem('token')
        let dnt_client_id = jwtDecode(userToken).id
        createDonat(dnt_client_id, amount, purpose).then(data => navigate(HOME_ROUTE))
    }

    return (
        <Container className='login_form' >
            <Card style={{width: 600}} className='card_form'>
                <h2 className="title_form">Пожертвования</h2>
                <Form className="form">
                    <Form.Control
                        className="placehldr"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Сумма пожертвования в рублях"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Цель пожертвования"
                        value={purpose}
                        onChange={e => setPurpose(e.target.value)}
                    />
                    <Row className="row_form">
                        <Button className="button_with_contur" onClick={newDonation}>
                            Помочь приюту
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default DonationForm;