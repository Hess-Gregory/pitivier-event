const { all, find, create, update, destroy }  = require('../../repository/queryRepository');
const   db                      = require('../../index'),
locationVehiculeItem    = 'locationVehiculeItem'

module.exports = {

    find(req, res) {
        return find(db.locationVehiculeItem, req.params.vehiculeitemId, res);
    },

    get(req, res) {
        return all(db.locationVehiculeItem, res);
    },

    store(req, res){
        return create(db.locationVehiculeItem, req.body, res, 'locationVehiculeItem'); 
        // (model, request, respond, fieldName, pathName)
    },

    update(req, res){
        return update(db.locationVehiculeItem, req.params.vehiculeitemId, req.body, res, 'locationVehiculeItem'); 
        // (model, id, request, respond, fieldName, pathName)
    },

    delete(req, res) {
        return destroy(db.locationVehiculeItem, req.params.vehiculeitemId, res, 'locationVehiculeItem');
    },

}

