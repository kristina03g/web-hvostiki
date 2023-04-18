const Router = require('express')
const router = new Router()
const requestController = require('../controllers/requestController')

router.post('/addTakeRequest', requestController.addTakeRequest)
router.post('/addGiveRequestCat', requestController.addGiveRequestCat)
router.post('/addGiveRequestDog', requestController.addGiveRequestDog)
router.get('/getAccepted', requestController.getAcceptedRequests)
router.get('/getApproved', requestController.getApprovedRequests)
router.get('/getRejected', requestController.getRejectedRequests)
router.get('/:idHistory', requestController.getRequestHistory)
router.put('/updateAcceptedToOk/:idAcceptedToOk', requestController.updateAcceptedRequestsToOk)
router.put('/updateAcceptedToCancel/:idAcceptedToCancel', requestController.updateAcceptedRequestsToCancel)
router.put('/updateRejectedToCancel/:idRejected', requestController.updateRejectedRequestsToCancel)
router.put('/updateApprovedToCancel/:idApprovedToCancel', requestController.updateApprovedRequestsToCancel)
router.put('/updateApprovedToOk/:idApprovedToOk', requestController.updateApprovedRequestsToOk)

module.exports = router