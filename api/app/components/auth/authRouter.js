const auth = require('./authController');
const router = require('express').Router()

router.post('/login', auth.signin)

module.exports = router
