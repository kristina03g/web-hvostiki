const Router = require('express')
const router = new Router()
const routerAdmin = require('./adminRouter')
const routerClient = require('./clientRouter')
const routerDonation = require('./donationRouter')
const routerPet = require('./petRouter')
const routerRequest = require('./requestRouter')
const routerLogin = require('./loginRouter')

router.use('/admin', routerAdmin)
router.use('/client', routerClient)
router.use('/donation', routerDonation)
router.use('/pet', routerPet)
router.use('/request', routerRequest)
router.use('/user', routerLogin)

module.exports = router