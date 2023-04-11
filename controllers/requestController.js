const { DataTypes } = require('sequelize')
const db = require('../models')

const Admin = db.admins
const Client = db.clients
const Donation = db.donations
const Pet = db.pets
const Request = db.requests

// 1. create take request

const addTakeRequest = async (req, res) => {

    let info = {
        request_type: 'Взять',
        client_id: req.body.client_id,
        pet_id: req.body.pet_id,
        purpose: '',
        request_status: 'Принято',
        //request_date: DataTypes.NOW
    }

    const request = await Request.create(info)
    res.status(200).send(request)
}

// 2. create give request

const addGiveRequest = async (req, res) => {

    let info = {
        request_type: 'Отдать',
        client_id: req.body.client_id,
        pet_id: req.body.pet_id,
        purpose: '',
        request_status: 'Принято',
        //request_date: DataTypes.NOW
    }

    const request = await Request.create(info)
    res.status(200).send(request)
}

// 3. get request history

const getRequestHistory = async (req, res) => {

    let idHistory = req.params.client_id
    let requests = await Request.findAll({
        attributes: ['pet_photo', 'pet_name', 'pet_gender', 'pet_age', 'pet_status', 'request_date', 'request_status'],
        where: {client_id: idHistory}, 
        include: [{model: Pet}]})
    res.status(200).send(requests)

}

// 4. get accepted requests

const getAcceptedRequests = async (req, res) => {

    let requests = await Request.findAll({
        attributes: ['request_type', 'request_date', 'purpose','client_name', 'client_bday', 'client_phone', 'client_address', 'pet_photo', 'pet_name', 'pet_gender', 'pet_breed', 'pet_age', 'pet_illness'],
        where: {request_status: 'Принято'}, 
        include: [{model: Pet, Client}]})
    res.status(200).send(requests)

}

// 5. get approved requests

const getApprovedRequests = async (req, res) => {

    let requests = await Request.findAll({
        attributes: ['request_type', 'request_date', 'purpose','client_name', 'client_bday', 'client_phone', 'client_address', 'pet_photo', 'pet_name', 'pet_gender', 'pet_breed', 'pet_age', 'pet_illness'],
        where: {request_status: 'Одобрено'}, 
        include: [{model: Pet, Client}]})
    res.status(200).send(requests)

}

// 6. get rejected requests

const getRejectedRequests = async (req, res) => {

    let requests = await Request.findAll({
        attributes: ['request_type', 'request_date', 'purpose','client_name', 'client_bday', 'client_phone', 'client_address', 'pet_photo', 'pet_name', 'pet_gender', 'pet_breed', 'pet_age', 'pet_illness'],
        where: {request_status: 'Отклонено'}, 
        include: [{model: Pet, Client}]})
    res.status(200).send(requests)

}

// 7. update accepted requests status to Ok

const updateAcceptedRequestsToOk = async (req, res) => {

    let idAcceptedToOk = req.params.request_id
    let request = await Request.update({
        request_status: "Одобрено" }, {
            where: {
              request_id: idAcceptedToOk,
              request_status: 'Принято'
            }
        })
    res.status(200).send(request)

}

// 8. update accepted requests status to Cancel

const updateAcceptedRequestsToCancel = async (req, res) => {

    let idAcceptedToCancel = req.params.request_id
    let request = await Request.update({
        request_status: "Отклонено" }, {
            where: {
              request_id: idAcceptedToCancel,
              request_status: 'Принято'
            }
        })
    res.status(200).send(request)

}

// 9. update rejected requests status to Cancel

const updateRejectedRequestsToCancel = async (req, res) => {

    let idRejected = req.params.request_id
    let request = await Request.update({
        request_status: "Отменено" }, {
            where: {
              request_id: idRejected,
              request_status: 'Отклонено'
            }
        })
    res.status(200).send(request)

}

// 10. update approved requests status to Cancel

const updateApprovedRequestsToCancel = async (req, res) => {

    let idApprovedToCancel = req.params.request_id
    let request = await Request.update({
        request_status: "Отменено" }, {
            where: {
              request_id: idApprovedToCancel,
              request_status: 'Одобрено'
            }
        })
    res.status(200).send(request)

}

// 11. update approved requests status to Ok

const updateApprovedRequestsToOk = async (req, res) => {

    let idApprovedToOk = req.params.request_id
    let request = await Request.update({
        request_status: "Выполнено" }, {
            where: {
              request_id: idApprovedToOk,
              request_status: 'Одобрено'
            }
        })
    res.status(200).send(request)

}

module.exports = {
    addGiveRequest,
    addTakeRequest,
    getAcceptedRequests,
    getApprovedRequests,
    getRejectedRequests,
    getRequestHistory,
    updateAcceptedRequestsToCancel,
    updateAcceptedRequestsToOk,
    updateApprovedRequestsToOk,
    updateApprovedRequestsToCancel,
    updateRejectedRequestsToCancel
}