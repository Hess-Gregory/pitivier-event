const { all, find, create, update, destroy } = require('../../repository/queryRepository');
const   db                      = require('../../index'),
        locationSalleDesc    = 'locationSalleDesc'

module.exports = {

    find(req, res) {
        return find(db.locationSalleDesc, req.params.salledescId, res);
    },

    get(req, res) {
        return all(db.locationSalleDesc, res);
    },

    store(req, res){
        return create(db.locationSalleDesc, req.body, res, 'locationSalleDesc'); 
        // (model, request, respond, fieldName, pathName)
    },

    update(req, res){
        return update(db.locationSalleDesc, req.params.salledescId, req.body, res, 'locationSalleDesc'); 
        // (model, id, request, respond, fieldName, pathName)
    },

    delete(req, res) {
        return destroy(db.locationSalleDesc, req.params.salledescId, res, 'locationSalleDesc');
    },

}

