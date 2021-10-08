const { all, find, create, update, destroy } = require('../../repository/queryRepository');
const   db                      = require('../../index'),
        locationMaterielDesc    = 'locationMaterielDesc'

module.exports = {

    find(req, res) {
        return find(db.locationMaterielDesc, req.params.materieldescId, res);
    },

    get(req, res) {
        return all(db.locationMaterielDesc, res);
    },

    store(req, res){
        return create(db.locationMaterielDesc, req.body, res, 'locationMaterielDesc'); 
        // (model, request, respond, fieldName, pathName)
    },

    update(req, res){
        return update(db.locationMaterielDesc, req.params.materieldescId, req.body, res, 'locationMaterielDesc'); 
        // (model, id, request, respond, fieldName, pathName)
    },

    delete(req, res) {
        return destroy(db.locationMaterielDesc, req.params.materieldescId, res, 'locationMaterielDesc');
    },

}

