const { all, find, create, update, destroy }  = require('../repository/queryRepository');
const   db       = require('../index'),
        location    = 'location'

module.exports = {

    find(req, res) {
        return find(db.location, req.params.locationId, res);
    },

    get(req, res) {
        return all(db.location, res);
    },

    store(req, res){
        return create(db.location, req.body, res, 'location'); 
        // (model, request, respond, fieldName, pathName)
    },

    update(req, res){
        return update(db.location, req.params.locationId, req.body, res, 'location'); 
        // (model, id, request, respond, fieldName, pathName)
    },

    delete(req, res) {
        return destroy(db.location, req.params.locationId, res, 'location');
    },

}

