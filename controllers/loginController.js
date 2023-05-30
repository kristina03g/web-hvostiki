const {Client, Admin} = require('../models/models')
const ApiError = require('../error/ApiError')
const sequelize = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sKey = "random_secret_key123"

const generateJwt = (id, login) => {
    return jwt.sign({id, login}, sKey, {expiresIn: '24h'})
}

class LoginController {

    async userLogin(req, res, next) {
        const {login, password} = req.body
        const client = await Client.findOne({where: {client_login: login}})
        const admin = await Admin.findOne({where: {admin_login: login}})
        let token
        if (!client && !admin) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        if (client) {
            let comparePassword = bcrypt.compareSync(password, client.client_password)
            if (!comparePassword) {
                return next(ApiError.internal('Указан неверный пароль'))
            }
            token = generateJwt(client.client_id, client.client_login)
        }
        if (admin) {
            let comparePassword = bcrypt.compareSync(password, admin.admin_password)
            if (!comparePassword) {
                return next(ApiError.internal('Указан неверный пароль'))
            }
            token = generateJwt(admin.admin_id, admin.admin_login)
        }
        return res.json({token})
    }

    async checkRole(req, res, next) {
        const {login} = req.body
        const client = await Client.findOne({where: {client_login: login}})
        const admin = await Admin.findOne({where: {admin_login: login}})
        let isAdmin = false
        if (!client && !admin) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        if (admin) {
            isAdmin = true
        }
        return res.json({isAdmin})
    }
}

module.exports = new LoginController()