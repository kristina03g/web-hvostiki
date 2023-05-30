const Router = require('express')
const router = new Router()
const requestController = require('../controllers/requestController')

router.post('/addTakeRequest', requestController.addTakeRequest)

router.post('/givePet', requestController.addGiveRequestPet)
router.post('/takePet', requestController.addTakeRequest)
router.post('/personalCabinet/:id', requestController.getRequestHistory)

router.post('/addGiveRequestCat', requestController.addGiveRequestCat)
router.post('/addGiveRequestDog', requestController.addGiveRequestDog)
router.post('/getAccepted', requestController.getAcceptedRequests)
router.post('/getApproved', requestController.getApprovedRequests)
router.post('/getRejected', requestController.getRejectedRequests)

router.put('/updateAcceptedToOk/:id', requestController.updateAcceptedRequestsToOk)
router.put('/updateAcceptedToCancel/:id', requestController.updateAcceptedRequestsToCancel)
router.put('/updateRejectedToCancel/:id', requestController.updateRejectedRequestsToCancel)
router.put('/updateApprovedToCancel/:id', requestController.updateApprovedRequestsToCancel)
router.put('/updateApprovedToOk/:id', requestController.updateApprovedRequestsToOk)

module.exports = router