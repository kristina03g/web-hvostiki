const db = require('../models')

const Admin = db.admins
const Client = db.clients
const Donation = db.donations
const Pet = db.pets
const Request = db.requests

// 1. create cat

const addCat = async (req, res) => {

    let info = {
        pet_type: 'Кошка',
        pet_photo: req.body.pet_photo,
        pet_name: req.body.pet_name,
        pet_breed: req.body.pet_breed,
        pet_gender: req.body.pet_gender,
        pet_age: req.body.pet_age,
        pet_illness: req.body.pet_illness,
        pet_status: 'В ожидании'
    }

    const pet = await Pet.create(info)
    res.status(200).send(pet)

}

// 2. create dog

const addDog = async (req, res) => {

    let info = {
        pet_type: 'Собака',
        pet_photo: req.body.pet_photo,
        pet_name: req.body.pet_name,
        pet_breed: req.body.pet_breed,
        pet_gender: req.body.pet_gender,
        pet_age: req.body.pet_age,
        pet_illness: req.body.pet_illness,
        pet_status: 'В ожидании'
    }

    const pet = await Pet.create(info)
    res.status(200).send(pet)

}

// 3. get all cats

const getAllCats = async (req, res) => {

    let pets = await Pet.findAll({attributes: {exclude: ['pet_id', 'pet_type', 'pet_illness', 'pet_status']}, where: {pet_type: 'Кошка'}})
    res.status(200).send(pets)

}

// 4. get all dogs

const getAllDogs = async (req, res) => {

    let pets = await Pet.findAll({attributes: {exclude: ['pet_id', 'pet_type', 'pet_illness', 'pet_status']}, where: {pet_type: 'Собака'}})
    res.status(200).send(pets)

}

// 5. update pet status to Cancel

const updatePetToCancel = async (req, res) => {

    let idCancel = req.params.request_id
    let pet = await Pet.update({
        pet_status: "Не принят" }, {
            where: {
              request_id: idCancel,
              pet_status: 'В ожидании'
            },
            include: [{model: Request}]
        })
    res.status(200).send(pet)

}

// 6. update pet status to Shelter

const updatePetToShelter = async (req, res) => {

    let idShelter = req.params.request_id
    let pet = await Pet.update({
        pet_status: "В приюте" }, {
            where: {
              request_id: idShelter,
              pet_status: 'В ожидании'
            },
            include: [{model: Request}]
        })
    res.status(200).send(pet)

}

// 7. update pet status to Home

const updatePetToHome = async (req, res) => {

    let idHome = req.params.request_id
    let pet = await Pet.update({
        pet_status: "Дома" }, {
            where: {
              request_id: idHome,
              pet_status: 'В приюте'
            },
            include: [{model: Request}]
        })
    res.status(200).send(pet)

}

module.exports = {
    addCat,
    addDog,
    getAllCats,
    getAllDogs,
    updatePetToCancel,
    updatePetToShelter,
    updatePetToHome
}


