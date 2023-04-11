const petController = require('../controllers/petController.js')

const router = require('express').Router()

router.post('/addCat', petController.addCat)

router.post('/addDog', petController.addDog)

router.get('/getAllCats', petController.getAllCats)

router.get('/getAllDogs', petController.getAllDogs)

router.put('/:idCancel', petController.updatePetToCancel)

router.put('/:idShelter', petController.updatePetToShelter)

router.put('/:idHome', petController.updatePetToHome)

module.exports = router