const Router = require('express')
const router = new Router()
const donationController = require('../controllers/donationController')

router.post('/addDonation', donationController.addDonation)
router.get('/donationStatistics', donationController.getDonationStatistics)
router.post('/donationStatisticsAmount', donationController.getDonationStatisticsSortByAmount)
router.post('/donationStatisticsDate', donationController.getDonationStatisticsSortByDate)

module.exports = router