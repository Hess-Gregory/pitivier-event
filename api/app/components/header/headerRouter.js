const header = require('./headerController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/header', header.getHeaders)
router.post('/header', authJwt.hasRoleAdmin('Administrateur') , header.storeHeader)
router.post('/header/exist', authJwt.hasRoleAdmin('Administrateur') , header.existHeader)
router.post('/header/exist/:headerId', authJwt.hasRoleAdmin('Administrateur') , header.existHeader)

router.get('/header/:headerId', header.findHeader)
router.get('/header/page/:page', header.findHeaderByPage)
router.put('/header/:headerId', authJwt.hasRoleAdmin('Administrateur') , header.updateHeader)
router.delete('/header/:headerId', authJwt.hasRoleAdmin('Administrateur') , header.deleteHeader)

module.exports = router
