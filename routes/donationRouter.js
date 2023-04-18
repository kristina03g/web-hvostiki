const Router = require('express')
const router = new Router()
const donationController = require('../controllers/donationController')

router.post('/addDonation', donationController.addDonation)
router.get('/donationStatistics', donationController.getDonationStatistics)
router.get('/donationStatisticsAmount', donationController.getDonationStatisticsSortByAmount)
router.get('/donationStatisticsDate', donationController.getDonationStatisticsSortByDate)

module.exports = router