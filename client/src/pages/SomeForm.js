import React from 'react';
import {useLocation } from 'react-router-dom';
import { DONATION_ROUTE, GIVE_PET_ROUTE, TAKE_PET_ROUTE } from '../utils/consts';
import TakePetForm from '../components/TakePetForm';
import GivePetForm from '../components/GivePetForm';
import DonationForm from '../components/DonationForm';
import {Container } from 'react-bootstrap';
import ClientNav from '../components/ClientNav';
import NavBar from "../components/NavBar";

const SomeForm = () => {
    const location = useLocation()
    const take = location.pathname === TAKE_PET_ROUTE
    const give = location.pathname === GIVE_PET_ROUTE
    const donation = location.pathname === DONATION_ROUTE
    return (
        <Container>
            <NavBar />
            <ClientNav />
            {take && <TakePetForm /> || give && <GivePetForm /> || donation && <DonationForm />}
        </Container>
    );
};

export default SomeForm;