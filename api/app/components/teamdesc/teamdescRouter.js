const teamdesc = require('./teamdescController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/teamdesc', teamdesc.getTeams)
router.post('/teamdesc', authJwt.hasRoleAdmin('Administrateur') , teamdesc.storeTeam)
router.get('/teamdesc/:teamdescId', teamdesc.findTeam)
router.put('/teamdesc/:teamdescId', authJwt.hasRoleAdmin('Administrateur') , teamdesc.updateTeam)
router.delete('/teamdesc/:teamdescId', authJwt.hasRoleAdmin('Administrateur') , teamdesc.deleteTeam)

module.exports = router
