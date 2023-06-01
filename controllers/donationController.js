const {Donation, Client} = require('../models/models')
const ApiError = require('../error/ApiError')

class DonationController {

    // 1. create donation
    async addDonation(req, res, next) {


        //if (!req.body.dnt_client_id || !req.body.amount) {
        //    return next(ApiError.con_refused('Необходимо заполнить все поля!'))
        //}
        let info = {
            dnt_client_id: req.body.dnt_client_id,
            amount: req.body.amount,
            purpose: req.body.purpose,
        
        }

        const donation = await Donation.create(info)
        res.status(200).send(donation)

    }

    // 2. get donation statistics
    async getDonationStatistics(req, res) {

        let donations = await Donation.findAll({
            attributes: ['amount', 'donation_date'],
            include: [{model: Client, attributes: ['client_name']}]})
        res.status(200).send(donations)

    }

    // 3. get donation statistics sort by amount
    async getDonationStatisticsSortByAmount(req, res) {

        let donations = await Donation.findAll({
            attributes: ['amount', 'donation_date'],
            include: [{model: Client, attributes: ['client_name']}],
            order: [['amount', 'DESC']]})
        return res.json({donations})

    }

    // 4. get donation statistics sort by date
    async getDonationStatisticsSortByDate(req, res) {

        let donations = await Donation.findAll({
            attributes: ['amount', 'donation_date'],
            include: [{model: Client, attributes: ['client_name']}],
            order: [['donation_date', 'DESC']]})
        return res.json({donations})

    }

}

module.exports = new DonationController()