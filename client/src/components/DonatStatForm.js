import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../index';
import { Container, ListGroup, ListGroupItem, Dropdown, DropdownButton } from 'react-bootstrap';
import DonationCard from './DonationCard';
import '../styles.css'
import { sortDonatDate, sortDonatAmount } from '../http/donationAPI';

const DonatStatForm = observer(() => {
    const {donation} = useContext(Context)
    useEffect(() => {
        sortDonatDate().then(data => donation.setDonation(data))
    }, [])

    const sumSort = () => {
            sortDonatAmount().then(data => donation.setDonation(data))
    }
    const dateSort = () => {
            sortDonatDate().then(data => donation.setDonation(data))
    }


    return (
        <Container>
            <div class="dropdown">
                <button class="dropbtn">Сортировка</button>
                <div class="dropdown-content">
                    <a href="#" onClick={sumSort}>по сумме</a>
                    <a href="#"onClick={dateSort}>по дате</a>
                </div>
            </div>
            <ListGroup>
                    {donation.donations.map(donation =>
                    <ListGroupItem className='list_group_white'>
                        <DonationCard key={donation.client.client_name} donation={donation}/>
                    </ListGroupItem>
                    )}
            </ListGroup>
        </Container>
    );
});

export default DonatStatForm;