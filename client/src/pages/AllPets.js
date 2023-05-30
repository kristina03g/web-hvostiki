import React from 'react';
import {useLocation } from 'react-router-dom';
import { ALL_CATS_ROUTE, ALL_DOGS_ROUTE } from '../utils/consts';
import AllCats from '../components/AllCats';
import AllDogs from '../components/AllDogs';
import { Container } from 'react-bootstrap';
import ClientNav from '../components/ClientNav';
import ClientNavBar from "../components/ClientNavBar";
import '../styles.css'

const AllPets = () => {
    const location = useLocation()
    const cats = location.pathname === ALL_CATS_ROUTE
    const dogs = location.pathname === ALL_DOGS_ROUTE
    return (
        <Container>
            <ClientNavBar />
            <ClientNav />
            {cats && <AllCats /> || dogs && <AllDogs />}
        </Container>
    );
};

export default AllPets;