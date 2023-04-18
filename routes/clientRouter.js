const Router = require('express')
const router = new Router()
const clientController = require('../controllers/clientController')
const authMiddleware = require('../middleware/authMiddleware')

//router.post('/addClient', clientController.addClient)
router.post('/registration', clientController.clientRegistration)
router.post('/login', clientController.clientLogin)
router.get('/auth', authMiddleware, clientController.clientCheck)
router.get('/clientStatistics', clientController.getClientStatistics)
router.get('/getClient/:login', clientController.getClientByLogin)
//router.get('/client_login/:login/client_password/:password', clientController.getClientByLogin)

module.exports = router