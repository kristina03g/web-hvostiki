import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Container, Row } from 'react-bootstrap';
import PetCard from './PetCard';
import '../styles.css'

const AllCats = observer(() => {
    const {pet} = useContext(Context)
    return (
        <Container>
            <h1>
                Вот такие котики у нас сейчас есть 🥺🥺🥺
            </h1>
            <Row className="d-flex">
            {pet.pets.filter(pets => pets.type === 'Кошка').map(pet =>
                <PetCard key={pet.id} pet={pet}/>
            )}
            </Row>
        </Container>
    );
});

export default AllCats;