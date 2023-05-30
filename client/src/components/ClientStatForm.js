import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../index';
import { Container, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import RequestCard from './RequestCard';
import RegsCard from './RegsCard';
import '../styles.css'
import { clientRegs } from '../http/userAPI';

const ClientStatForm = observer(() => {
    const {regs} = useContext(Context)

    useEffect(() => {
        clientRegs().then(data => regs.setRegistrations(data))
    }, [])

    return (
        <Container>
            <ListGroup>
                {regs.registrations.map(regs =>
                    <ListGroupItem className='list_group_white'>
                        <RegsCard key={regs.months} regs={regs}/>
                    </ListGroupItem>
                    )}
            </ListGroup>
        </Container>
    );
});

export default ClientStatForm;