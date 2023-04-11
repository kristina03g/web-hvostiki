const { DataTypes } = require('sequelize')
const { Sequelize } = require('../models')
const db = require('../models')

const Admin = db.admins
const Client = db.clients
const Donation = db.donations
const Pet = db.pets
const Request = db.requests

// 1. create admin

const addAdmin = async (req, res) => {

    let info = {
        admin_name: req.body.admin_name,
        admin_login: req.body.admin_login,
        admin_password: req.body.admin_password,
        admin_phone:req.body.admin_phone,
        //admin_reg_date: DataTypes.NOW
    }

    const admin = await Admin.create(info)
    res.status(200).send(admin)

}

// 2. check admin

const getAdminByLogin = async (req, res) => {

    let login = req.params.admin_login
    let password = req.params.admin_password
    let admin = await Admin.findOne({where: {admin_login: login, admin_password: password}})
    res.status(200).send(admin)

}

module.exports = {
    addAdmin,
    getAdminByLogin
}