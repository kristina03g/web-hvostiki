const {Admin} = require('../models/models')
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sKey = "random_secret_key123"

const generateJwt = (id, login) => {
    return jwt.sign({id, login}, sKey, {expiresIn: '24h'})
}

class AdminController {

    async adminRegistration(req, res, next) {
        const {admin_name, admin_login, admin_password, admin_phone} = req.body
        if (!admin_login || !admin_password) {
            return next(ApiError.badRequest('Некорректный login или password'))
        }
        const candidate = await Admin.findOne({where: {admin_login}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким login уже существует'))
        }
        const hashPassword = await bcrypt.hash(admin_password, 5)
        const admin = await Admin.create({admin_name, admin_login, admin_password: hashPassword, admin_phone})
        const token = generateJwt(admin.admin_id, admin_login)
        return res.json(token)
    }

    async adminLogin(req, res, next) {
        const {admin_login, admin_password} = req.body
        const admin = await Admin.findOne({where: {admin_login}})
        if (!admin) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(admin_password, admin.admin_password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(admin.admin_id, admin.admin_login)
        return res.json({token})
    }

    async adminCheck(req, res, next) {
        const token = generateJwt(req.admin.admin_id, req.admin.admin_login)
        return res.json(token)
    }

    // 1. create admin
    async addAdmin(req, res) {

        let info = {
            admin_name: req.body.admin_name,
            admin_login: req.body.admin_login,
            admin_password: req.body.admin_password,
            admin_phone:req.body.admin_phone,
        }

        const admin = await Admin.create(info)
        res.status(200).send(admin)
    }

    // 2. check admin
    async getAdminByLogin(req, res) {

        let admin = await Admin.findOne({where: {admin_login: req.params.login}})
        res.status(200).send(admin)

    }

}

module.exports = new AdminController()