const gallerydesc = require('./gallerydescController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/gallerydesc', gallerydesc.getGallerys)
router.post('/gallerydesc', authJwt.hasRoleAdmin('Administrateur') , gallerydesc.storeGallery)
router.get('/gallerydesc/:gallerydescId', gallerydesc.findGallery)
router.put('/gallerydesc/:gallerydescId', authJwt.hasRoleAdmin('Administrateur') , gallerydesc.updateGallery)
router.delete('/gallerydesc/:gallerydescId', authJwt.hasRoleAdmin('Administrateur') , gallerydesc.deleteGallery)

module.exports = router
