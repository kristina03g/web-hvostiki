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
            <div class="dropdown">
                <button class="dropbtn">Сортировка</button>
                <div class="dropdown-content">
                    <a href="#">по сумме</a>
                    <a href="#">по дате</a>
                </div>
            </div>
            <ListGroup>
                    {donation.donations.map(donation =>
                    <ListGroupItem className='list_group_white'>
                        <DonationCard key={donation.id} donation={donation}/>
                    </ListGroupItem>
                    )}
            </ListGroup>
        </Container>
    );
});

export default DonatStatForm;