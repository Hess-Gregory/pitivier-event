const blogdesc = require('./blogdescController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/blogdesc', blogdesc.get)
router.post('/blogdesc', authJwt.hasRoleAdmin('Administrateur') , blogdesc.store)
router.get('/blogdesc/:blogdescId', blogdesc.find)
router.put('/blogdesc/:blogdescId', authJwt.hasRoleAdmin('Administrateur') , blogdesc.update)
router.delete('/blogdesc/:blogdescId', authJwt.hasRoleAdmin('Administrateur') , blogdesc.delete)

module.exports = router
