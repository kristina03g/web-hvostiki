import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../index';
import { Container, Row } from 'react-bootstrap';
import PetCard from './PetCard';
import '../styles.css'
import { fetchDogs } from '../http/petAPI';

const AllDogs = observer(() => {
    const {pet} = useContext(Context)

    useEffect(() => {
        fetchDogs().then(data => pet.setPets(data))
    }, [])

    if (pet.pets.length != 0) {
    return (
        <Container>
            <h1 className='header'>
                Вот такие собачки у нас сейчас есть
            </h1>
            <Row className="row_form">
                {pet.pets.map(pet =>
                    <PetCard key={pet.pet_id} pet={pet}/>
                )}
            </Row>
        </Container>
    );
    }
});

export default AllDogs;