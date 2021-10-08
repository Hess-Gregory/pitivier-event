const { all, find, create, update, destroy }  = require('../repository/queryRepository');
const   db       = require('../index'),
        terms    = 'terms'

module.exports = {

    find(req, res) {
        return find(db.terms, req.params.termsId, res);
    },

    get(req, res) {
        return all(db.terms, res);
    },

    store(req, res){
        return create(db.terms, req.body, res, 'terms'); 
        // (model, request, respond, fieldName, pathName)
    },

    update(req, res){
        return update(db.terms, req.params.termsId, req.body, res, 'terms'); 
        // (model, id, request, respond, fieldName, pathName)
    },

    delete(req, res) {
        return destroy(db.terms, req.params.termsId, res, 'terms');
    },

}

