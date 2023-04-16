const requestController = require('../controllers/requestController.js')

const router = require('express').Router()



router.post('/addTakeRequest', requestController.addTakeRequest)

router.post('/addGiveRequest', requestController.addGiveRequest)



router.get('/getAccepted', requestController.getAcceptedRequests)

router.get('/getApproved', requestController.getApprovedRequests)

router.get('/getRejected', requestController.getRejectedRequests)

router.get('/:idHistory', requestController.getRequestHistory)



router.put('/:idAcceptedToOk', requestController.updateAcceptedRequestsToOk)

router.put('/:idAcceptedToCancel', requestController.updateAcceptedRequestsToCancel)

router.put('/:idRejected', requestController.updateRejectedRequestsToCancel)

router.put('/:idApprovedToCancel', requestController.updateApprovedRequestsToCancel)

router.put('/:idApprovedToOk', requestController.updateApprovedRequestsToOk)

module.exports = router