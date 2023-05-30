import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../index';
import { Container, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import RequestCard from './RequestCard';
import '../styles.css'
import { allRejected } from '../http/requestAPI';

const RejectedReqForm = observer(() => {
    const {request} = useContext(Context)

    useEffect(() => {
        allRejected().then(data => request.setRejected(data))
    }, [])

    const deleteElement = (request_id) => {
        request.setRejected(tempF(request.rejected, request_id))
    }
    
    const tempF = (currentRequest, request_id) => {
        const foundRequestIndex = currentRequest.findIndex(entry => entry.request_id === request_id);
        if (foundRequestIndex !== -1) currentRequest.splice(foundRequestIndex, 1);
        return currentRequest;
      }
    
    if (request.rejected.length != 0) {
    return (
        <Container>
            <ListGroup>
                    {request.rejected.map(request =>
                    <ListGroupItem className='list_group_white'>
                        <RequestCard key={request.request_id} request={request} onDelete={deleteElement}/>
                    </ListGroupItem>
                    )}
            </ListGroup>
        </Container>
    );
    }
});

export default RejectedReqForm;