import React, { useContext, useState } from 'react';
import {Context} from "../index";
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import {ADMIN_MAIN_ROUTE, HOME_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import {useNavigate} from 'react-router-dom'
import '../styles.css'
import { loginUser, checkUser } from '../http/userAPI';
import { observer } from 'mobx-react-lite'; 

const LoginForm = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const userClick = async() => {
        try {
            let data;
            data = await loginUser(login, password)
            user.setUser(data)
            let isAdmin = await checkUser(login)
            user.setIsAdmin(isAdmin)
            if (isAdmin) {
                navigate(ADMIN_MAIN_ROUTE)
            }
            else if (!isAdmin) {
                navigate(HOME_ROUTE)
            }
        } catch(e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container className="login_form">
            <Card style={{width: 600}} className='card_form'>
                <h2 className="title_form">Авторизация</h2>
                <Form className="form">
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
                            Нет аккаунта? <NavLink className='red_link' to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                        </div>
                        <Button className="button_with_contur" onClick={userClick}>
                            Войти
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default LoginForm;