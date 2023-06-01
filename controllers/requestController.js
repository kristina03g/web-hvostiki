const {Request, Pet, Client} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')

class RequestController {

    // 1. create take request
    async addTakeRequest(req, res) {

        let info = {
            request_type: 'Взять',
            req_client_id: req.body.req_client_id,
            req_pet_id: req.body.req_pet_id,
            purpose: req.body.purpose,
            request_status: 'Принято',
        }

        const request = await Request.create(info)
        res.status(200).send(request)
    }

    // 2. create give request
    async addGiveRequestCat(req, res, next) {
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

        const pet = await Pet.create(petInfo)
        } catch (e) {
            next(ApiError.badRequest(e.message))
            }
        //res.status(200).send(pet)

        const client = await Client.findOne({attributes: {include: ['client_id']}, where: {client_name: req.body.client_name, client_phone: req.body.client_phone, client_address: req.body.client_address}})

        let reqInfo = {
            request_type: 'Отдать',
            req_client_id: client.client_id,
            req_pet_id: pet.pet_id,
            purpose: req.body.purpose,
            request_status: 'Принято',
        }

        const request = await Request.create(reqInfo)
        res.status(200).send(request)

    }

    /*async addGiveRequestPet(req, res) {
        console.log(req.files.pet_photo)
        const {pet_photo} = req.files
        let fileName = uuid.v4() + ".jpg"
        pet_photo.mv(path.resolve(__dirname, '..', 'static', fileName))

        let info = {
            pet_type: req.body.pet_type,
            pet_photo: fileName,
            pet_name: req.body.pet_name,
            pet_breed: req.body.pet_breed,
            pet_gender: req.body.pet_gender,
            pet_age: req.body.pet_age,
            pet_illness: req.body.pet_illness,
            pet_status: 'В ожидании'
        }

        const pet = await Pet.create(petInfo)
        //res.status(200).send(pet)

        //const client = await Client.findOne({attributes: {include: ['client_id']}, where: {client_name: req.body.client_name, client_phone: req.body.client_phone, client_address: req.body.client_address}})

        let reqInfo = {
            request_type: 'Отдать',
            req_client_id: req.body.req_client_id,
            req_pet_id: pet.pet_id,
            purpose: req.body.purpose,
            request_status: 'Принято',
        }

        const request = await Request.create(reqInfo)
        res.status(200).send(request)

    }*/

    async addGiveRequestPet(req, res) {
            
            let {pet_type, pet_name, pet_breed, pet_gender, pet_age, pet_illness, req_client_id, purpose} = req.body
            let pet_status = 'В ожидании'
            let request_type = 'Отдать'
            let request_status = 'Принято'
    
            const {pet_photo} = req.files
            let fileName = uuid.v4()+'.jpg'
            pet_photo.mv(path.resolve(__dirname,'..','static', fileName))

            const pet = await Pet.create({pet_type, pet_photo: fileName, pet_name, pet_breed, pet_gender, pet_age, pet_illness, pet_status})

            let pet_id = pet.pet_id

            const request = await Request.create({request_type, req_client_id, req_pet_id: pet_id, purpose, request_status})

            return res.json(request)
        }


    // еще 2. create give request
    async addGiveRequestDog(req, res) {

        let petInfo = {
            pet_type: 'Собака',
            pet_photo: req.body.pet_photo,
            pet_name: req.body.pet_name,
            pet_breed: req.body.pet_breed,
            pet_gender: req.body.pet_gender,
            pet_age: req.body.pet_age,
            pet_illness: req.body.pet_illness,
            pet_status: 'В ожидании'
        }

        const pet = await Pet.create(petInfo)
        //res.status(200).send(pet)

        const client = await Client.findOne({attributes: {include: ['client_id']}, where: {client_name: req.body.client_name, client_phone: req.body.client_phone, client_address: req.body.client_address}})

        let reqInfo = {
            request_type: 'Отдать',
            req_client_id: client.client_id,
            req_pet_id: pet.pet_id,
            purpose: req.body.purpose,
            request_status: 'Принято',
        }

        const request = await Request.create(reqInfo)
        res.status(200).send(request)

    }

    // 3. get request history
    async getRequestHistory(req, res) {

        let requests = await Request.findAll({
            attributes: ['request_id', 'request_date', 'request_status'],
            include: [{model: Pet, attributes: ['pet_photo', 'pet_name', 'pet_breed', 'pet_gender', 'pet_age', 'pet_status']}],
            where: {req_client_id: req.params.id}
            })
            return res.json({requests})

    }

    // 4. get accepted requests
    async getAcceptedRequests(req, res) {

        let requests = await Request.findAll({
            attributes: ['request_id','request_type', 'request_date', 'purpose'],
            where: {request_status: 'Принято'},
            include: [{model: Pet, attributes: ['pet_photo', 'pet_name', 'pet_gender', 'pet_breed', 'pet_age', 'pet_illness']}, {model: Client, attributes: ['client_name', 'client_bday', 'client_phone', 'client_address']}]})
            return res.json({requests})

    }

    // 5. get approved requests
    async getApprovedRequests(req, res) {

        let requests = await Request.findAll({
            attributes: ['request_id', 'request_type', 'request_date', 'purpose'],
            where: {request_status: 'Одобрено'},
            include: [{model: Pet, attributes: ['pet_photo', 'pet_name', 'pet_gender', 'pet_breed', 'pet_age', 'pet_illness']}, {model: Client, attributes: ['client_name', 'client_bday', 'client_phone', 'client_address']}]})
            return res.json({requests})

    }

    // 6. get rejected requests
    async getRejectedRequests(req, res) {

        let requests = await Request.findAll({
            attributes: ['request_id', 'request_type', 'request_date', 'purpose'],
            where: {request_status: 'Отклонено'},
            include: [{model: Pet, attributes: ['pet_photo', 'pet_name', 'pet_gender', 'pet_breed', 'pet_age', 'pet_illness']}, {model: Client, attributes: ['client_name', 'client_bday', 'client_phone', 'client_address']}]})
            return res.json({requests})

    }

    // 7. update accepted requests status to Ok
    async updateAcceptedRequestsToOk(req, res) {

        let request = await Request.update({
            request_status: "Одобрено" }, {
                where: {
                request_id: req.params.id,
                request_status: 'Принято'
                }
            })
        return res.json({request})

    }

    // 8. update accepted requests status to Cancel
    async updateAcceptedRequestsToCancel(req, res) {

        let request = await Request.update({
            request_status: "Отклонено" }, {
                where: {
                request_id: req.params.id,
                request_status: 'Принято'
                }
            })
        return res.json({request})

    }

    // 9. update rejected requests status to Cancel
    async updateRejectedRequestsToCancel(req, res) {

        let request = await Request.update({
            request_status: "Отменено" }, {
                where: {
                request_id: req.params.id,
                request_status: 'Отклонено'
                }
            })

        let request_pet = await Request.findOne({attributes: ['req_pet_id', 'request_type'], where: {request_id: req.params.id}})

        if (request_pet.request_type == 'Отдать') {
            let pet = await Pet.update({
                pet_status: "Не принят" }, {
                    where: {pet_status: 'В ожидании', pet_id: request_pet.req_pet_id}
                })
            
        }
        return res.json({request})

    }

    // 10. update approved requests status to Cancel
    async updateApprovedRequestsToCancel(req, res) {

        let request = await Request.update({
            request_status: "Отменено" }, {
                where: {
                request_id: req.params.id,
                request_status: 'Одобрено'
                }
            })
        
        let request_pet = await Request.findOne({attributes: ['req_pet_id', 'request_type'], where: {request_id: req.params.id}})

        if (request_pet.request_type == 'Отдать') {
            let pet = await Pet.update({
                pet_status: "Не принят" }, {
                    where: {pet_status: 'В ожидании', pet_id: request_pet.req_pet_id}
                })
            //res.status(200).send(pet)
        }
        return res.json({request})

    }

    // 11. update approved requests status to Ok

    async updateApprovedRequestsToOk(req, res) {

        let request = await Request.update({
            request_status: "Выполнено" }, {
                where: {
                request_id: req.params.id,
                request_status: 'Одобрено'
                }
            })
        //res.status(200).send(request)
        let request_pet = await Request.findOne({attributes: ['req_pet_id', 'request_type'], where: {request_id: req.params.id}})

        if (request_pet.request_type == 'Отдать') {
            let pet = await Pet.update({
                pet_status: "В приюте" }, {
                    where: {pet_status: 'В ожидании', pet_id: request_pet.req_pet_id}
                })
            return res.json({pet})
        }
        else {
            let pet = await Pet.update({
                pet_status: "Дома" }, {
                    where: {pet_status: 'В приюте', pet_id: request_pet.req_pet_id}
                })
            return res.json({pet})
        }
    }
}

module.exports = new RequestController()