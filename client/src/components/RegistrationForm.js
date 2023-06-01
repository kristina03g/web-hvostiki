import React, { useContext, useState } from 'react';
import {Context} from "../index";
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE} from '../utils/consts';
import { useNavigate } from 'react-router-dom';
import '../styles.css'
import { registrationClient } from '../http/userAPI';
import { observer } from 'mobx-react-lite'; 

const RegistrationForm = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [bday, setBday] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const clientClick = async() => {
        try {
            let data;
            data = await registrationClient(name, bday, email, login, password, phone, address)
            user.setUser(data)
            user.setIsAdmin(false)
            navigate(HOME_ROUTE)
        } catch(e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container className="login_form">
            <Card style={{width: 600}} className='card_form'>
                <h2 className="title_form">Регистрация</h2>
                <Form className="form">
                    <Form.Control
                        className="placehldr"
                        placeholder="Имя"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Дата рождения"
                        value={bday}
                        onChange={e => setBday(e.target.value)}
                        type="date"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Почта"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Номер телефона"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        type="tel"
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Адрес"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Логин"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <Form.Control
                        className="placehldr"
                        placeholder="Пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="row_form">
                        <div className='blText_redBcgrnd'>
                            Уже есть аккаунт? <NavLink className='red_link' to={LOGIN_ROUTE}>Вход</NavLink>
                        </div>
                        <Button className="button_with_contur" onClick={clientClick}>
                            Зарегистрироваться
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default RegistrationForm;