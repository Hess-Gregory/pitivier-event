const navbar = require('./navbarController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/navbar', navbar.getNavbars)
router.post('/navbar', authJwt.hasRoleAdmin('Administrateur') , navbar.storeNavbar)

router.get('/navbar/:navbarId', navbar.findNavbar)
router.put('/navbar/:navbarId', authJwt.hasRoleAdmin('Administrateur') , navbar.updateNavbar)
router.delete('/navbar/:navbarId', authJwt.hasRoleAdmin('Administrateur') , navbar.deleteNavbar)

module.exports = router