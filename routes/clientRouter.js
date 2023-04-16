const clientController = require('../controllers/clientController.js')

const router = require('express').Router()

router.post('/addClient', clientController.addClient)



router.get('/clientStatistics', clientController.getClientStatistics)

router.get('/client_login/:login/client_password/:password', clientController.getClientByLogin)


module.exports = router