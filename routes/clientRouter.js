const clientController = require('../controllers/clientController.js')

const router = require('express').Router()

router.post('/addClient', clientController.addClient)

router.get('/client_login/:login/client_password/:password', clientController.getClientByLogin)

router.get('/clientStatistics', clientController.getClientStatistics)

module.exports = router