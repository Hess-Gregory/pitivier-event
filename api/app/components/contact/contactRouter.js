const contact = require('./contactController');
const router = require('express').Router()
const authJwt = require('../../config/verifyJwtToken');

router.get('/contact', contact.get)
router.post('/contact', authJwt.hasRoleAdmin('Administrateur') , contact.store)
router.put('/contact/:contactId', authJwt.hasRoleAdmin('Administrateur') , contact.update)
router.delete('/contact/:contactId', authJwt.hasRoleAdmin('Administrateur') , contact.delete)

module.exports = router