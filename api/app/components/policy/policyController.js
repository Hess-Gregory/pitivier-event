const { all, find, create, update, destroy }  = require('../repository/queryRepository');
const   db       = require('../index'),
        policy    = 'policy'

module.exports = {

    find(req, res) {
        return find(db.policy, req.params.policyId, res);
    },

    get(req, res) {
        return all(db.policy, res);
    },

    store(req, res){
        return create(db.policy, req.body, res, 'policy'); 
        // (model, request, respond, fieldName, pathName)
    },

    update(req, res){
        return update(db.policy, req.params.policyId, req.body, res, 'policy'); 
        // (model, id, request, respond, fieldName, pathName)
    },

    delete(req, res) {
        return destroy(db.policy, req.params.policyId, res, 'policy');
    },

}

