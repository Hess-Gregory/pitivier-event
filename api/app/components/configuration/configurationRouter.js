const configuration = require('./configurationController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/configuration', configuration.get)
// router.post('/configuration', configuration.store)

router.get('/configuration/:configurationId', configuration.find)
router.put('/configuration/:configurationId', authJwt.hasRoleAdmin('Administrateur') , configuration.update)
// router.delete('/configuration/:configurationId', configuration.delete)

module.exports = router