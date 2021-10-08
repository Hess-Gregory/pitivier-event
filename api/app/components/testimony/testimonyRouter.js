const testimony = require('./testimonyController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/testimony', testimony.get)
router.post('/testimony', authJwt.hasRoleAdmin('Administrateur') , testimony.store)

router.get('/testimony/:testimonyId', testimony.find)
router.put('/testimony/:testimonyId', authJwt.hasRoleAdmin('Administrateur') , testimony.update)
router.delete('/testimony/:testimonyId', authJwt.hasRoleAdmin('Administrateur') , testimony.delete)

module.exports = router