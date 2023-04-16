const donationController = require('../controllers/donationController.js')

const router = require('express').Router()

router.post('/addDonation', donationController.addDonation)



router.get('/donationStatistics', donationController.getDonationStatistics)

router.get('/donationStatisticsAmount', donationController.getDonationStatisticsSortByAmount)

router.get('/donationStatisticsDate', donationController.getDonationStatisticsSortByDate)


module.exports = router