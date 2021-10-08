const service = require('./serviceController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/service', service.getServices)
router.post('/service', authJwt.hasRoleAdmin('Administrateur') , service.storeService)
router.post('/service/exist', authJwt.hasRoleAdmin('Administrateur') , service.existService)
router.post('/service/exist/:serviceId', authJwt.hasRoleAdmin('Administrateur') , service.existService)

router.get('/service/:serviceId', service.findService)
router.put('/service/:serviceId', authJwt.hasRoleAdmin('Administrateur') , service.updateService)
router.delete('/service/:serviceId', authJwt.hasRoleAdmin('Administrateur') , service.deleteService)

module.exports = router
