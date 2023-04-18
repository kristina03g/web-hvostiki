const {Request, Pet, Client} = require('../models/models')

class RequestController {

    // 1. create take request
    async addTakeRequest(req, res) {

        let info = {
            request_type: 'Взять',
            req_client_id: req.body.req_client_id,
            req_pet_id: req.body.req_pet_id,
            purpose: '',
            request_status: 'Принято',
        }

        const request = await Request.create(info)
        res.status(200).send(request)
    }

    // 2. create give request
    async addGiveRequestCat(req, res) {

        let petInfo = {
            pet_type: 'Кошка',
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

        let reqInfo = {
            request_type: 'Отдать',
            req_client_id: req.body.req_client_id,
            req_pet_id: pet.pet_id,
            purpose: '',
            request_status: 'Принято',
        }


        const request = await Request.create(reqInfo)
        res.status(200).send(request)
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

        let reqInfo = {
            request_type: 'Отдать',
            req_client_id: req.body.req_client_id,
            req_pet_id: pet.pet_id,
            purpose: '',
            request_status: 'Принято',
        }


        const request = await Request.create(reqInfo)
        res.status(200).send(request)
    }

    // 3. get request history
    async getRequestHistory(req, res) {

        //let idHistory = req.params.client_id
        let requests = await Request.findAll({
            attributes: ['request_date', 'request_status'],
            include: [{model: Pet, attributes: ['pet_photo', 'pet_name', 'pet_gender', 'pet_age', 'pet_status']}],
            where: {req_client_id: req.params.idHistory}
            })
        res.status(200).send(requests)

    }

    // 4. get accepted requests
    async getAcceptedRequests(req, res) {

        let requests = await Request.findAll({
            attributes: ['request_type', 'request_date', 'purpose'],
            where: {request_status: 'Принято'},
            include: [{model: Pet, attributes: ['pet_photo', 'pet_name', 'pet_gender', 'pet_breed', 'pet_age', 'pet_illness']}, {model: Client, attributes: ['client_name', 'client_bday', 'client_phone', 'client_address']}]})
        res.status(200).send(requests)

    }

    // 5. get approved requests
    async getApprovedRequests(req, res) {

        let requests = await Request.findAll({
            attributes: ['request_type', 'request_date', 'purpose'],
            where: {request_status: 'Одобрено'},
            include: [{model: Pet, attributes: ['pet_photo', 'pet_name', 'pet_gender', 'pet_breed', 'pet_age', 'pet_illness']}, {model: Client, attributes: ['client_name', 'client_bday', 'client_phone', 'client_address']}]})
        res.status(200).send(requests)

    }

    // 6. get rejected requests
    async getRejectedRequests(req, res) {

        let requests = await Request.findAll({
            attributes: ['request_type', 'request_date', 'purpose'],
            where: {request_status: 'Отклонено'},
            include: [{model: Pet, attributes: ['pet_photo', 'pet_name', 'pet_gender', 'pet_breed', 'pet_age', 'pet_illness']}, {model: Client, attributes: ['client_name', 'client_bday', 'client_phone', 'client_address']}]})
        res.status(200).send(requests)

    }

    // 7. update accepted requests status to Ok
    async updateAcceptedRequestsToOk(req, res) {

        let request = await Request.update({
            request_status: "Одобрено" }, {
                where: {
                request_id: req.params.idAcceptedToOk,
                request_status: 'Принято'
                }
            })
        res.status(200).send(request)

    }

    // 8. update accepted requests status to Cancel
    async updateAcceptedRequestsToCancel(req, res) {

        let request = await Request.update({
            request_status: "Отклонено" }, {
                where: {
                request_id: req.params.idAcceptedToCancel,
                request_status: 'Принято'
                }
            })
        res.status(200).send(request)

    }

    // 9. update rejected requests status to Cancel
    async updateRejectedRequestsToCancel(req, res) {

        let request = await Request.update({
            request_status: "Отменено" }, {
                where: {
                request_id: req.params.idRejected,
                request_status: 'Отклонено'
                }
            })

        let request_pet = await Request.findOne({attributes: ['req_pet_id', 'request_type'], where: {request_id: req.params.idRejected}})

        if (request_pet.request_type == 'Отдать') {
            let pet = await Pet.update({
                pet_status: "Не принят" }, {
                    where: {pet_status: 'В ожидании', pet_id: request_pet.req_pet_id}
                })
            //res.status(200).send(pet)
        }
        res.status(200).send(request)

    }

    // 10. update approved requests status to Cancel
    async updateApprovedRequestsToCancel(req, res) {

        let request = await Request.update({
            request_status: "Отменено" }, {
                where: {
                request_id: req.params.idApprovedToCancel,
                request_status: 'Одобрено'
                }
            })
        
        let request_pet = await Request.findOne({attributes: ['req_pet_id', 'request_type'], where: {request_id: req.params.idApprovedToCancel}})

        if (request_pet.request_type == 'Отдать') {
            let pet = await Pet.update({
                pet_status: "Не принят" }, {
                    where: {pet_status: 'В ожидании', pet_id: request_pet.req_pet_id}
                })
            //res.status(200).send(pet)
        }
        res.status(200).send(request)

    }

    // 11. update approved requests status to Ok

    async updateApprovedRequestsToOk(req, res) {

        let request = await Request.update({
            request_status: "Выполнено" }, {
                where: {
                request_id: req.params.idApprovedToOk,
                request_status: 'Одобрено'
                }
            })
        //res.status(200).send(request)
        let request_pet = await Request.findOne({attributes: ['req_pet_id', 'request_type'], where: {request_id: req.params.idApprovedToOk}})

        if (request_pet.request_type == 'Отдать') {
            let pet = await Pet.update({
                pet_status: "В приюте" }, {
                    where: {pet_status: 'В ожидании', pet_id: request_pet.req_pet_id}
                })
            res.status(200).send(pet)
        }
        else {
            let pet = await Pet.update({
                pet_status: "Дома" }, {
                    where: {pet_status: 'В приюте', pet_id: request_pet.req_pet_id}
                })
            res.status(200).send(pet)
        }
    }
}

module.exports = new RequestController()