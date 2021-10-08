const gallery = require('./controller.gallery');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

//See all medias:
router.get('/media', gallery.getGallerys)

//See all list of gallerie
router.get('/gallery', gallery.getListGallerys)

router.post('/media', 
// authJwt.hasRoleAdmin('Administrateur') , 
gallery.storeMedia)

router.post('/gallery', 
// authJwt.hasRoleAdmin('Administrateur') , 
gallery.storeGallery)



router.get('/gallery/:galleryId', gallery.findGallery)


router.put('/gallery/:galleryId', 
// authJwt.hasRoleAdmin('Administrateur') , 
gallery.updateGallery)


router.delete('/gallery/:galleryId', 
// authJwt.hasRoleAdmin('Administrateur') , 
gallery.deleteGallery)










// router.get('/gallery', cardMenu.getAllCards)
// router.get('/media', cardMenu.getAllmenus)
// router.get('/menudesc', cardMenu.getMenudescs)


// router.get('/card/:Id', cardMenu.findCat)
// router.post('/card', authJwt.hasRoleAdmin('Administrateur') , cardMenu.storeCat)
// router.put('/card/:Id', authJwt.hasRoleAdmin('Administrateur') , cardMenu.updateCat)
// router.delete('/card/:Id', authJwt.hasRoleAdmin('Administrateur') , cardMenu.deleteCat)


// router.get('/menu/:Id', cardMenu.findItem)
// router.post('/menu', authJwt.hasRoleAdmin('Administrateur') , cardMenu.storeItem)
// router.put('/menu/:Id', authJwt.hasRoleAdmin('Administrateur') , cardMenu.updateItem)
// router.delete('/menu/:Id', authJwt.hasRoleAdmin('Administrateur') , cardMenu.deleteItem)


// router.post('/menudesc', authJwt.hasRoleAdmin('Administrateur') , cardMenu.storeMenudesc)
// router.get('/menudesc/:menudescId', cardMenu.findMenudesc)
// router.put('/menudesc/:menudescId', authJwt.hasRoleAdmin('Administrateur') , cardMenu.updateMenudesc)
// router.delete('/menudesc/:menudescId', authJwt.hasRoleAdmin('Administrateur') , cardMenu.deleteMenudesc)











module.exports = router
