const {Pet, Request} = require('../models/models')

class PetController {

    // 1. create cat
    async addCat(req, res) {

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
    async addDog(req, res) {

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
    async getAllCats(req, res) {

        let pets = await Pet.findAll({attributes: {exclude: ['pet_id', 'pet_type', 'pet_illness', 'pet_status']}, where: {pet_type: 'Кошка'}})
        res.status(200).send(pets)

    }

    // 4. get all dogs
    async getAllDogs(req, res) {

        let pets = await Pet.findAll({attributes: {exclude: ['pet_id', 'pet_type', 'pet_illness', 'pet_status']}, where: {pet_type: 'Собака'}})
        res.status(200).send(pets)

    }

    // 5. update pet status to Cancel

    async updatePetToCancel(req, res) {

        let pet = await Pet.update({
            pet_status: "Не принят" }, {
                where: {pet_status: 'В ожидании', pet_id: req.params.idCancel}
            })
        res.status(200).send(pet)

    }

    // 6. update pet status to Shelter

    async updatePetToShelter(req, res) {

        let pet = await Pet.update({
            pet_status: "В приюте" }, {
                where: {pet_status: 'В ожидании', pet_id: req.params.idShelter}
            })
        res.status(200).send(pet)

    }

    // 7. update pet status to Home

    async updatePetToHome(req, res) {

        let pet = await Pet.update({
            pet_status: "Дома" }, {
                where: {pet_status: 'В приюте', pet_id: req.params.idHome}
            })
        res.status(200).send(pet)

    }

}

module.exports = new PetController()