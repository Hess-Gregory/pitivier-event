const { all, find, create, update, destroy }  = require('../repository/queryRepository');
const   db         = require('../index'),
        navbar     = 'navbar';

// if in field contain file upload use fileRepository

module.exports = {

    findNavbar(req, res){
        return find(db.navbar, req.params.navbarId, res);
    },

    getNavbars(req, res){
        return all(db.navbar, res);
    },

    storeNavbar(req, res){
        return create(db.navbar, req.body, res); 
        // (model, request, respond, fieldName, pathName)
    },

    updateNavbar(req, res){
        return update(db.navbar, req.params.navbarId, req.body, res); 
        // (model, id, request, respond, fieldName, pathName)
    },

    deleteNavbar(req, res){
        return destroy(db.navbar, req.params.navbarId, res, 'navbar');
    }

}