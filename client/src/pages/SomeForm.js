import React from 'react';
import {useLocation, useParams } from 'react-router-dom';
import { DONATION_ROUTE, GIVE_PET_ROUTE, TAKE_CAT_ROUTE, TAKE_DOG_ROUTE } from '../utils/consts';
import TakePetForm from '../components/TakePetForm';
import GivePetForm from '../components/GivePetForm';
import DonationForm from '../components/DonationForm';
import {Container } from 'react-bootstrap';
import ClientNav from '../components/ClientNav';
import ClientNavBar from "../components/ClientNavBar";
import '../styles.css'

const SomeForm = () => {
    const {id} = useParams()
    const location = useLocation()
    const take_cat = location.pathname == TAKE_CAT_ROUTE + '/' + id
    const take_dog = location.pathname == TAKE_DOG_ROUTE + '/' + id
    const give = location.pathname === GIVE_PET_ROUTE
    const donation = location.pathname === DONATION_ROUTE
    return (
        <Container>
            <ClientNavBar />
            <ClientNav />
            {take_cat && <TakePetForm param={'Кошка'} id={id}/> || take_dog && <TakePetForm param={'Собака'} id={id}/> || give && <GivePetForm /> || donation && <DonationForm />}
        </Container>
    );
};

export default SomeForm;