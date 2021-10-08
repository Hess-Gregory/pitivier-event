const policy = require('./policyController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/policy', policy.get)
router.post('/policy', authJwt.hasRoleAdmin('Administrateur') , policy.store)

router.get('/policy/:policyId', policy.find)
router.put('/policy/:policyId', authJwt.hasRoleAdmin('Administrateur') , policy.update)
router.delete('/policy/:policyId', authJwt.hasRoleAdmin('Administrateur') , policy.delete)

module.exports = router