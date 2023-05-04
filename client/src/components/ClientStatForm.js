import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Container, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import RequestCard from './RequestCard';
import RegsCard from './RegsCard';
import '../styles.css'

const ClientStatForm = observer(() => {
    const {regs} = useContext(Context)
    return (
        <Container>
            <ListGroup>
                {regs.registrations.map(regs =>
                    <ListGroupItem>
                        <RegsCard key={regs.id} regs={regs}/>
                    </ListGroupItem>
                    )}
            </ListGroup>
        </Container>
    );
});

export default ClientStatForm;