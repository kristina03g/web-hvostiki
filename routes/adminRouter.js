const Router = require('express')
const router = new Router()
const adminController = require('../controllers/adminController')

router.post('/addAdmin', adminController.addAdmin)
router.get('/getAdmin/:login', adminController.getAdminByLogin)
//router.get('/getAdmin/:login/:password', adminController.getAdminByLogin)

module.exports = router