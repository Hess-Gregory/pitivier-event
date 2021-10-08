const cardBuffet = require('./cardbuffetController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/cardbuffet', cardBuffet.getAllCardBuffets)
router.get('/buffet', cardBuffet.getAllbuffets)
router.get('/buffetdesc', cardBuffet.getBuffetdescs)


router.get('/cardbuffet/:Id', cardBuffet.findCat)
router.post('/cardbuffet', authJwt.hasRoleAdmin('Administrateur') , cardBuffet.storeCat)
router.put('/cardbuffet/:Id', authJwt.hasRoleAdmin('Administrateur') , cardBuffet.updateCat)
router.delete('/cardbuffet/:Id', authJwt.hasRoleAdmin('Administrateur') , cardBuffet.deleteCat)


router.get('/buffet/:Id', cardBuffet.findItem)
router.post('/buffet', authJwt.hasRoleAdmin('Administrateur') , cardBuffet.storeItem)
router.put('/buffet/:Id', authJwt.hasRoleAdmin('Administrateur') , cardBuffet.updateItem)
router.delete('/buffet/:Id', authJwt.hasRoleAdmin('Administrateur') , cardBuffet.deleteItem)


router.post('/buffetdesc', authJwt.hasRoleAdmin('Administrateur') , cardBuffet.storeBuffetdesc)
router.get('/buffetdesc/:buffetdescId', cardBuffet.findBuffetdesc)
router.put('/buffetdesc/:buffetdescId', authJwt.hasRoleAdmin('Administrateur') , cardBuffet.updateBuffetdesc)
router.delete('/buffetdesc/:buffetdescId', authJwt.hasRoleAdmin('Administrateur') , cardBuffet.deleteBuffetdesc)

module.exports = router