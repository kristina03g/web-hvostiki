const Router = require('express')
const router = new Router()
const petController = require('../controllers/petController')

router.post('/addCat', petController.addCat)
router.post('/addDog', petController.addDog)
router.get('/getAllCats', petController.getAllCats)
router.get('/getAllDogs', petController.getAllDogs)
router.put('/updatePetToHome/:idHome', petController.updatePetToHome)
router.put('/updatePetToCancel/:idCancel', petController.updatePetToCancel)
router.put('/updatePetToShelter/:idShelter', petController.updatePetToShelter)

module.exports = router