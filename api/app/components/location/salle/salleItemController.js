const { all, find, create, update, destroy } = require('../../repository/queryRepository');
const   db                      = require('../../index'),
locationSalleItem    = 'locationSalleItem'

module.exports = {

    find(req, res) {
        return find(db.locationSalleItem, req.params.salleitemId, res);
    },

    get(req, res) {
        return all(db.locationSalleItem, res);
    },

    store(req, res){
        return create(db.locationSalleItem, req.body, res, 'locationSalleItem'); 
        // (model, request, respond, fieldName, pathName)
    },

    update(req, res){
        return update(db.locationSalleItem, req.params.salleitemId, req.body, res, 'locationSalleItem'); 
        // (model, id, request, respond, fieldName, pathName)
    },

    delete(req, res) {
        return destroy(db.locationSalleItem, req.params.salleitemId, res, 'locationSalleItem');
    },

}

