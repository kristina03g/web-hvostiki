import React from 'react';
import { observer } from 'mobx-react-lite';
import { Col, Row } from 'react-bootstrap';
import '../styles.css'

const RegsCard = observer(({regs}) => {
    const namesMonths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    return (
    <Row >
            <p>{namesMonths[regs.months - 1]}<br />
            Количество новых пользователей: {regs.n_clients}</p>
    </Row>
    );
});

export default RegsCard;