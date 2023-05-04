import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Container, Row } from 'react-bootstrap';
import PetCard from './PetCard';
import '../styles.css'

const AllDogs = observer(() => {
    const {pet} = useContext(Context)
    return (
        <Container>
            <h1 className='header'>
                Вот такие собачки у нас сейчас есть
            </h1>
            <Row className="row_form">
                {pet.pets.filter(pets => pets.type === 'Собака').map(pet =>
                    <PetCard key={pet.id} pet={pet}/>
                )}
            </Row>
        </Container>
    );
});

export default AllDogs;