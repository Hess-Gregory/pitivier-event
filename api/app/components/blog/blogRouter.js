const blog = require('./blogController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/blog', blog.get)
router.post('/blog', authJwt.hasRoleAdmin('Administrateur') , blog.store)

router.get('/blog/:blogId', blog.find)
router.put('/blog/:blogId', authJwt.hasRoleAdmin('Administrateur') , blog.update)
router.delete('/blog/:blogId', authJwt.hasRoleAdmin('Administrateur') , blog.delete)

module.exports = router