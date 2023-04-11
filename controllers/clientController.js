const { DataTypes } = require('sequelize')
const db = require('../models')

const Admin = db.admins
const Client = db.clients
const Donation = db.donations
const Pet = db.pets
const Request = db.requests

// 1. create client

const addClient = async (req, res) => {

    let info = {
        client_name: req.body.client_name,
        client_bday: req.body.client_bday,
        client_email: req.body.client_email,
        client_login: req.body.client_login,
        client_password: req.body.client_password,
        client_phone: req.body.client_phone,
        client_address: req.body.client_address,
        //client_reg_date: DataTypes.NOW
    }

    const client = await Client.create(info)
    res.status(200).send(client)

}

// 2. check client

const getClientByLogin = async (req, res) => {

    let login = req.params.client_login
    let password = req.params.client_password
    let client = await Client.findOne({where: {client_login: login, client_password: password}})
    res.status(200).send(client)

}

// 3. get client registration statistics

const getClientStatistics = async (req, res) => {

    let clientsRegs = await Client.findAll({attributes: ['client_reg_date', sequelize.fn('count', sequelize.col('client_id'))], group: ['client_reg_date']})
    res.status(200).send(clientsRegs)
    
}

module.exports = {
    addClient,
    getClientByLogin,
    getClientStatistics
}