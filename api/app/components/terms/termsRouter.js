const terms = require('./termsController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/terms', terms.get)
router.post('/terms', authJwt.hasRoleAdmin('Administrateur') , terms.store)

router.get('/terms/:termsId', terms.find)
router.put('/terms/:termsId', authJwt.hasRoleAdmin('Administrateur') , terms.update)
router.delete('/terms/:termsId', authJwt.hasRoleAdmin('Administrateur') , terms.delete)

module.exports = router