const user = require('./userController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/user', authJwt.hasRoleAdmin('Administrateur') , user.getUsers)

router.post('/user'
//, authJwt.hasRoleAdmin('Administrateur')
,user.storeUser)
router.post('/user/exist', user.existUser)
router.post('/user/exist/:userId', user.existUser)

router.get('/user/:userId', user.findUser)
router.put('/user/:userId'
//, authJwt.hasRoleAdmin('Administrateur')
,user.updateUser)
router.delete('/user/:userId', user.deleteUser)

module.exports = router