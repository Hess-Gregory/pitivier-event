const testimonydesc = require('./testimonydescController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/testimonydesc', testimonydesc.getTestimonys)
router.post('/testimonydesc', authJwt.hasRoleAdmin('Administrateur') , testimonydesc.storeTestimony)
router.get('/testimonydesc/:testimonydescId', testimonydesc.findTestimony)
router.put('/testimonydesc/:testimonydescId', authJwt.hasRoleAdmin('Administrateur') , testimonydesc.updateTestimony)
router.delete('/testimonydesc/:testimonydescId', authJwt.hasRoleAdmin('Administrateur') , testimonydesc.deleteTestimony)

module.exports = router
