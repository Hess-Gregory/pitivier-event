const { all, find, create, update, destroy } = require('../../repository/queryRepository');
const   db                      = require('../../index'),
        locationVehiculeDesc    = 'locationVehiculeDesc'

module.exports = {

    find(req, res) {
        return find(db.locationVehiculeDesc, req.params.vehiculedescId, res);
    },

    get(req, res) {
        return all(db.locationVehiculeDesc, res);
    },

    store(req, res){
        return create(db.locationVehiculeDesc, req.body, res, 'locationVehiculeDesc'); 
        // (model, request, respond, fieldName, pathName)
    },

    update(req, res){
        return update(db.locationVehiculeDesc, req.params.vehiculedescId, req.body, res, 'locationVehiculeDesc'); 
        // (model, id, request, respond, fieldName, pathName)
    },

    delete(req, res) {
        return destroy(db.locationVehiculeDesc, req.params.vehiculedescId, res, 'locationVehiculeDesc');
    },

}

