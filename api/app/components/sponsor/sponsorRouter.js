const sponsor = require('./sponsorController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/sponsor', sponsor.get)
router.post('/sponsor', authJwt.hasRoleAdmin('Administrateur') , sponsor.store)

router.get('/sponsor/:sponsorId', sponsor.find)
router.put('/sponsor/:sponsorId', authJwt.hasRoleAdmin('Administrateur') , sponsor.update)
router.delete('/sponsor/:sponsorId', authJwt.hasRoleAdmin('Administrateur') , sponsor.delete)

module.exports = router