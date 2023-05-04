import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Container, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import RequestCard from './RequestCard';
import '../styles.css'

const AcceptedReqForm = observer(() => {
    const {request} = useContext(Context)
    return (
        <Container>
            <ListGroup>
                    {request.accepted.map(request =>
                    <ListGroupItem>
                        <RequestCard key={request.id} request={request}/>
                    </ListGroupItem>
                    )}
            </ListGroup>
        </Container>
    );
});

export default AcceptedReqForm;