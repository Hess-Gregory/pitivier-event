const { all, find, create, update, destroy }  = require('../repository/queryRepository');
const   db         = require('../index'),
        navbarsub  = 'navbarsub';

// if in field contain file upload use fileRepository

module.exports = {

    findNavbarsub(req, res){
        return find(db.navbarsub, req.params.navbarsubId, res);
    },

    getNavbarsubs(req, res){
        return all(db.navbarsub, res);
    },

    storeNavbarsub(req, res){
        return create(db.navbarsub, req.body, res); 
        // (model, request, respond, fieldName, pathName)
    },

    updateNavbarsub(req, res){
        return update(db.navbarsub, req.params.navbarsubId, req.body, res); 
        // (model, id, request, respond, fieldName, pathName)
    },

    deleteNavbarsub(req, res){
        return destroy(db.navbarsub, req.params.navbarsubId, res, 'navbarsub');
    }

}