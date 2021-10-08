
const authJwt = require('../../config/verifyJwtToken');
const location = require('./locationController');

const materieldesc = require('./materiel/materielDescController'); 
const materielitem = require('./materiel/materielItemController'); 

const salledesc = require('./salle/salleDescController'); 
const salleitem = require('./salle/salleItemController');

const vehiculedesc = require('./vehicule/vehiculeDescController'); 
const vehiculeitem = require('./vehicule/vehiculeItemController'); 

const router = require('express').Router()

router.get('/location/location', location.get)
router.post('/location/location', authJwt.hasRoleAdmin('Administrateur') , location.store)
router.get('/location/location/:locationId', location.find)
router.put('/location/location/:locationId', authJwt.hasRoleAdmin('Administrateur') , location.update)
router.delete('/location/location/:locationId', authJwt.hasRoleAdmin('Administrateur') , location.delete)

router.get('/location/materieldesc', materieldesc.get)
router.post('/location/materieldesc', authJwt.hasRoleAdmin('Administrateur') , materieldesc.store)
router.get('/location/materieldesc/:materieldescId', materieldesc.find)
router.put('/location/materieldesc/:materieldescId', authJwt.hasRoleAdmin('Administrateur') , materieldesc.update)
router.delete('/location/materieldesc/:materieldescId', authJwt.hasRoleAdmin('Administrateur') , materieldesc.delete)

router.get('/location/materielitem', materielitem.get)
router.post('/location/materielitem', authJwt.hasRoleAdmin('Administrateur') , materielitem.store)
router.get('/location/materielitem/:materielitemId' , materielitem.find)
router.put('/location/materielitem/:materielitemId', authJwt.hasRoleAdmin('Administrateur') , materielitem.update)
router.delete('/location/materielitem/:materielitemId', authJwt.hasRoleAdmin('Administrateur') , materielitem.delete)

router.get('/location/salledesc', salledesc.get)
router.post('/location/salledesc', authJwt.hasRoleAdmin('Administrateur') , salledesc.store)
router.get('/location/salledesc/:salledescId', salledesc.find)
router.put('/location/salledesc/:salledescId', authJwt.hasRoleAdmin('Administrateur') , salledesc.update)
router.delete('/location/salledesc/:salledescId', authJwt.hasRoleAdmin('Administrateur') , salledesc.delete)

router.get('/location/salleitem', salleitem.get)
router.post('/location/salleitem', authJwt.hasRoleAdmin('Administrateur') , salleitem.store)
router.get('/location/salleitem/:salleitemId', salleitem.find)
router.put('/location/salleitem/:salleitemId', authJwt.hasRoleAdmin('Administrateur') , salleitem.update)
router.delete('/location/salleitem/:salleitemId', authJwt.hasRoleAdmin('Administrateur') , salleitem.delete)

router.get('/location/vehiculedesc', vehiculedesc.get)
router.post('/location/vehiculedesc', authJwt.hasRoleAdmin('Administrateur') , vehiculedesc.store)
router.get('/location/vehiculedesc/:vehiculedescId', vehiculedesc.find)
router.put('/location/vehiculedesc/:vehiculedescId', authJwt.hasRoleAdmin('Administrateur') , vehiculedesc.update)
router.delete('/location/vehiculedesc/:vehiculedescId', authJwt.hasRoleAdmin('Administrateur') , vehiculedesc.delete)

router.get('/location/vehiculeitem', vehiculeitem.get)
router.post('/location/vehiculeitem', authJwt.hasRoleAdmin('Administrateur') , vehiculeitem.store)
router.get('/location/vehiculeitem/:vehiculeitemId', vehiculeitem.find)
router.put('/location/vehiculeitem/:vehiculeitemId', authJwt.hasRoleAdmin('Administrateur') , vehiculeitem.update)
router.delete('/location/vehiculeitem/:vehiculeitemId', authJwt.hasRoleAdmin('Administrateur') , vehiculeitem.delete)

module.exports = router