import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Container, Row } from 'react-bootstrap';
import PetCard from './PetCard';

const AllDogs = observer(() => {
    const {pet} = useContext(Context)
    return (
        <Container>
            <h1>
                Вот такие собачки у нас сейчас есть 🥺🥺🥺
            </h1>
            <Row className="d-flex">
                {pet.pets.filter(pets => pets.type === 'Собака').map(pet =>
                    <PetCard key={pet.id} pet={pet}/>
                )}
            </Row>
        </Container>
    );
});

export default AllDogs;