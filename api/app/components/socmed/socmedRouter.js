const socmed = require('./socmedController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/socmed', socmed.getSocmeds)
router.post('/socmed', authJwt.hasRoleAdmin('Administrateur') , socmed.storeSocmed)

router.get('/socmed/:socmedId', socmed.findSocmed)
router.put('/socmed/:socmedId', authJwt.hasRoleAdmin('Administrateur') , socmed.updateSocmed)
router.delete('/socmed/:socmedId', authJwt.hasRoleAdmin('Administrateur') , socmed.deleteSocmed)

module.exports = router
