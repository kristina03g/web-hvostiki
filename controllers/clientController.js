const {Client} = require('../models/models')
const ApiError = require('../error/ApiError')
const sequelize = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sKey = "random_secret_key123"

const generateJwt = (id, login) => {
    return jwt.sign({id, login}, sKey, {expiresIn: '24h'})
}

class ClientController {

    async clientRegistration(req, res, next) {
        const {client_name, client_bday, client_email, client_login, client_password, client_phone, client_address} = req.body
        if (!client_login || !client_password) {
            return next(ApiError.badRequest('Некорректный логин или пароль'))
        }
        const candidate = await Client.findOne({where: {client_login}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким логином уже существует'))
        }
        const hashPassword = await bcrypt.hash(client_password, 5)
        const client = await Client.create({client_name, client_bday, client_email, client_login, client_password: hashPassword, client_phone, client_address})
        const token = generateJwt(client.client_id, client_login)
        return res.json(token)
    }

    async clientLogin(req, res, next) {
        const {client_login, client_password} = req.body
        const client = await Client.findOne({where: {client_login}})
        if (!client) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(client_password, client.client_password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(client.client_id, client.client_login)
        return res.json({token})
    }

    async clientCheck(req, res, next) {
        const token = generateJwt(req.client.client_id, req.client.client_login)
        return res.json(token)
    }

    // 1. create client
    async addClient(req, res) {

        let info = {
            client_name: req.body.client_name,
            client_bday: req.body.client_bday,
            client_email: req.body.client_email,
            client_login: req.body.client_login,
            client_password: req.body.client_password,
            client_phone: req.body.client_phone,
            client_address: req.body.client_address,
        }

        const client = await Client.create(info)
        res.status(200).send(client)

    }

    // 2. check client
    async getClientByLogin(req, res) {

        let client = await Client.findOne({where: {client_login: req.params.login}})
        res.status(200).send(client)

    }

    // 3. get client registration statistics
    async getClientStatistics(req, res) {

        let clientsRegs = await Client.findAll({attributes: [[sequelize.fn('month', sequelize.col('client_reg_date')), 'months'], [sequelize.fn('count', sequelize.col('client_id')), 'n_clients']], group: [sequelize.fn('month', sequelize.col('client_reg_date')), 'months'], limit: 6})
        return res.json(clientsRegs)
        
    }

}

module.exports = new ClientController()