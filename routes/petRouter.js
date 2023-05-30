const Router = require('express')
const router = new Router()
const petController = require('../controllers/petController')

router.get('/allCats', petController.getAllCats)
router.get('/allDogs', petController.getAllDogs)

router.post('/takeCat/:id', petController.getOnePet)
router.post('/takeDog/:id', petController.getOnePet)

router.post('/addCat', petController.addCat)
router.post('/addDog', petController.addDog)
router.put('/updatePetToHome/:idHome', petController.updatePetToHome)
router.put('/updatePetToCancel/:idCancel', petController.updatePetToCancel)
router.put('/updatePetToShelter/:idShelter', petController.updatePetToShelter)

module.exports = router