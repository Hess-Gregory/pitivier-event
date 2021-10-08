const navbarsub = require('./navbarsubController');

const router = require('express').Router()

router.get('/navbarsub', navbarsub.getNavbarsubs)
router.post('/navbarsub', navbarsub.storeNavbarsub)

router.get('/navbarsub/:navbarsubId', navbarsub.findNavbarsub)
router.put('/navbarsub/:navbarsubId', navbarsub.updateNavbarsub)
router.delete('/navbarsub/:navbarsubId', navbarsub.deleteNavbarsub)

module.exports = router