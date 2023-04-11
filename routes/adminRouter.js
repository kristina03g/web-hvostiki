const adminController = require('../controllers/adminController.js')

const router = require('express').Router()

router.post('/addAdmin', adminController.addAdmin)

router.get('/admin_login/:login/admin_password/:password', adminController.getAdminByLogin)

module.exports = router