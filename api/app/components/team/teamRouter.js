const team = require('./teamController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/team', team.get)
router.post('/team', authJwt.hasRoleAdmin('Administrateur') , team.store)

router.get('/team/:teamId', team.find)
router.put('/team/:teamId', authJwt.hasRoleAdmin('Administrateur') , team.update)
router.delete('/team/:teamId', authJwt.hasRoleAdmin('Administrateur') , team.delete)

module.exports = router