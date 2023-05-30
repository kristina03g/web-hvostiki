const Router = require('express')
const router = new Router()
const loginController = require('../controllers/loginController')

router.post('/login', loginController.userLogin)
router.post('/check', loginController.checkRole)

module.exports = router