const { all, find, create, update, destroy } = require('../../repository/queryRepository');
const   db                      = require('../../index'),
locationMaterielItem    = 'locationMaterielItem'

module.exports = {

    find(req, res) {
        return find(db.locationMaterielItem, req.params.materielitemId, res);
    },

    get(req, res) {
        return all(db.locationMaterielItem, res);
    },

    store(req, res){
        return create(db.locationMaterielItem, req.body, res, 'locationMaterielItem'); 
        // (model, request, respond, fieldName, pathName)
    },

    update(req, res){
        return update(db.locationMaterielItem, req.params.materielitemId, req.body, res, 'locationMaterielItem'); 
        // (model, id, request, respond, fieldName, pathName)
    },

    delete(req, res) {
        return destroy(db.locationMaterielItem, req.params.materielitemId, res, 'locationMaterielItem');
    },

}

