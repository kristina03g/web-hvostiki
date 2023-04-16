const db = require('../models')

const Admin = db.admins
const Client = db.clients
const Donation = db.donations
const Pet = db.pets
const Request = db.requests

// 1. create donation

const addDonation = async (req, res) => {

    let info = {
        dnt_client_id: req.body.dnt_client_id,
        amount: req.body.amount,
        purpose: req.body.purpose,
        //donation_date: DataTypes.NOW
    
    }

    const donation = await Donation.create(info)
    res.status(200).send(donation)

}

// 2. get donation statistics

const getDonationStatistics = async (req, res) => {

    let donations = await Donation.findAll({
        attributes: ['amount', 'donation_date'],
        include: [{model: Client, attributes: ['client_name']}]})
    res.status(200).send(donations)

}

// 3. get donation statistics sort by amount

const getDonationStatisticsSortByAmount = async (req, res) => {

    let donations = await Donation.findAll({
        attributes: ['amount', 'donation_date'],
        include: [{model: Client, attributes: ['client_name']}],
        order: [['amount', 'DESC']]})
    res.status(200).send(donations)

}

// 4. get donation statistics sort by date

const getDonationStatisticsSortByDate = async (req, res) => {

    let donations = await Donation.findAll({
        attributes: ['amount', 'donation_date'],
        include: [{model: Client, attributes: ['client_name']}],
        order: [['donation_date', 'DESC']]})
    res.status(200).send(donations)

}

module.exports = {
    addDonation,
    getDonationStatistics,
    getDonationStatisticsSortByAmount,
    getDonationStatisticsSortByDate
}