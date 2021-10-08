const carousel  = require('./carouselController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/carousel', carousel.get)
router.post('/carousel', authJwt.hasRoleAdmin('Administrateur') , carousel.store)

router.get('/carousel/:carouselId', carousel.find)
router.put('/carousel/:carouselId', authJwt.hasRoleAdmin('Administrateur') , carousel.update)
router.delete('/carousel/:carouselId', authJwt.hasRoleAdmin('Administrateur') , carousel.delete)

module.exports = router