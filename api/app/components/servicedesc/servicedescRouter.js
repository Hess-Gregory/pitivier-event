const servicedesc = require('./servicedescController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/servicedesc', servicedesc.getServices)
router.post('/servicedesc', authJwt.hasRoleAdmin('Administrateur') , servicedesc.storeService)
router.get('/servicedesc/:servicedescId', servicedesc.findService)
router.put('/servicedesc/:servicedescId', authJwt.hasRoleAdmin('Administrateur') , servicedesc.updateService)
router.delete('/servicedesc/:servicedescId', authJwt.hasRoleAdmin('Administrateur') , servicedesc.deleteService)

module.exports = router
