import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Container, ListGroup, ListGroupItem, Dropdown, DropdownButton } from 'react-bootstrap';
import DonationCard from './DonationCard';
import '../styles.css'

const DonatStatForm = observer(() => {
    const {donation} = useContext(Context)
    return (
        <Container>
            <DropdownButton id="dropdown-basic-button" title="Сортировка">
                <Dropdown.Item href="#/action-1">по сумме</Dropdown.Item>
                <Dropdown.Item href="#/action-2">по дате</Dropdown.Item>
            </DropdownButton>
            <ListGroup>
                    {donation.donations.map(donation =>
                    <ListGroupItem>
                        <DonationCard key={donation.id} donation={donation}/>
                    </ListGroupItem>
                    )}
            </ListGroup>
        </Container>
    );
});

export default DonatStatForm;