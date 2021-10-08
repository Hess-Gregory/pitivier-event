const inbox = require('./inboxController');
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/inbox', inbox.getInboxs)
router.post('/inbox', authJwt.hasRoleAdmin('Administrateur') , inbox.storeInbox)

router.get('/inbox/:inboxId', inbox.findInbox)
router.put('/inbox/:inboxId', authJwt.hasRoleAdmin('Administrateur') , inbox.updateInbox)
router.delete('/inbox/:inboxId', authJwt.hasRoleAdmin('Administrateur') , inbox.deleteInbox)

module.exports = router