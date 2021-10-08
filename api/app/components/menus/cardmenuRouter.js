const cardMenu = require('./cardmenuController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/card', cardMenu.getAllCards)
router.get('/menu', cardMenu.getAllmenus)
router.get('/menudesc', cardMenu.getMenudescs)


router.get('/card/:Id', cardMenu.findCat)
router.post('/card', authJwt.hasRoleAdmin('Administrateur') , cardMenu.storeCat)
router.put('/card/:Id', authJwt.hasRoleAdmin('Administrateur') , cardMenu.updateCat)
router.delete('/card/:Id', authJwt.hasRoleAdmin('Administrateur') , cardMenu.deleteCat)


router.get('/menu/:Id', cardMenu.findItem)
router.post('/menu', authJwt.hasRoleAdmin('Administrateur') , cardMenu.storeItem)
router.put('/menu/:Id', authJwt.hasRoleAdmin('Administrateur') , cardMenu.updateItem)
router.delete('/menu/:Id', authJwt.hasRoleAdmin('Administrateur') , cardMenu.deleteItem)


router.post('/menudesc', authJwt.hasRoleAdmin('Administrateur') , cardMenu.storeMenudesc)
router.get('/menudesc/:menudescId', cardMenu.findMenudesc)
router.put('/menudesc/:menudescId', authJwt.hasRoleAdmin('Administrateur') , cardMenu.updateMenudesc)
router.delete('/menudesc/:menudescId', authJwt.hasRoleAdmin('Administrateur') , cardMenu.deleteMenudesc)

module.exports = router