const {Pet, Request} = require('../models/models')

class PetController {

    // 1. create cat
    async addCat(req, res, next) {
        try {
            const {img} = req.files
            console.log(req.files)
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            let info = {
                pet_type: 'Кошка',
                pet_photo: fileName,
                pet_name: req.body.pet_name,
                pet_breed: req.body.pet_breed,
                pet_gender: req.body.pet_gender,
                pet_age: req.body.pet_age,
                pet_illness: req.body.pet_illness,
                pet_status: 'В ожидании'
            }

            const pet = await Pet.create(info)
            res.status(200).send(pet)

    } catch (e) {
        next(ApiError.badRequest(e.message))
        }
    }

    // 2. create dog
    async addDog(req, res, next) {
        try {
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            let info = {
                pet_type: 'Собака',
                pet_photo: fileName,
                pet_name: req.body.pet_name,
                pet_breed: req.body.pet_breed,
                pet_gender: req.body.pet_gender,
                pet_age: req.body.pet_age,
                pet_illness: req.body.pet_illness,
                pet_status: 'В ожидании'
            }

            const pet = await Pet.create(info)
            res.status(200).send(pet)

    } catch (e) {
        next(ApiError.badRequest(e.message))
        }
    }

    // 3. get all cats
    async getAllCats(req, res) {

        let pets = await Pet.findAll({attributes: {exclude: ['pet_illness', 'pet_status']}, where: {pet_type: 'Кошка'}})
        return res.json({pets})

    }

    // 4. get all dogs
    async getAllDogs(req, res) {

        let pets = await Pet.findAll({attributes: {exclude: ['pet_illness', 'pet_status']}, where: {pet_type: 'Собака'}})
        return res.json({pets})

    }

    async getOnePet(req, res) {

        let pet = await Pet.findOne({attributes: {include: ['pet_name', 'pet_breed', 'pet_gender', 'pet_age']}, where: {pet_id: req.params.id}})
        return res.json({pet})

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