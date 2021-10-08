const { all, find, create, update, destroy }  = require('../repository/queryRepository');
const   db         = require('../index'),
        inbox      = 'inbox';

// if in field contain file upload use fileRepository

module.exports = {

    findInbox(req, res){
        return find(db.inbox, req.params.inboxId, res);
    },

    getInboxs(req, res){
        return all(db.inbox, res);
    },

    storeInbox(req, res){
        return create(db.inbox, req.body, res); 
        // (model, request, respond, fieldName, pathName)
    },

    updateInbox(req, res){
        return update(db.inbox, req.params.inboxId, req.body, res); 
        // (model, id, request, respond, fieldName, pathName)
    },

    deleteInbox(req, res){
        return destroy(db.inbox, req.params.inboxId, res, 'inbox');
    }

}