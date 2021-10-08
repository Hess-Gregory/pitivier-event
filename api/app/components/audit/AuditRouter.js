const audit = require('./AuditController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/audit', authJwt.hasRoleAdmin('Administrateur') , audit.getAudits)
router.post('/audit', audit.storeAudit)
router.get('/audit/:auditId', authJwt.hasRoleAdmin('Administrateur') , audit.findAudit)


module.exports = router
