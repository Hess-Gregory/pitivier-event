const about = require('./aboutController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/about', about.get)
router.post('/about', authJwt.hasRoleAdmin('Administrateur') , about.store)

router.get('/about/:aboutId', about.find)
router.put('/about/:aboutId', authJwt.hasRoleAdmin('Administrateur') , about.update)
router.delete('/about/:aboutId', authJwt.hasRoleAdmin('Administrateur') , about.delete)

module.exports = router