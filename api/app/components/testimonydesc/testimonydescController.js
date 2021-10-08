const { all, find, create, update, destroy }  = require('../repository/queryRepository');
const	db          = require('../index'),
		testimonydesc     = 'testimonydesc',
        Sequelize   = require('sequelize'),
        Op          = Sequelize.Op

// if in field contain file upload use fileRepository
module.exports = {


    findTestimony(req, res){
        return find(db.testimonydesc, req.params.testimonydescId, res);
    },

	getTestimonys(req, res){
		return all(db.testimonydesc, res);
	},

	storeTestimony(req, res){
		return create(db.testimonydesc, req.body, res); 
		// (model, request, respond, fieldName, pathName)
	},

	updateTestimony(req, res){
		return update(db.testimonydesc, req.params.testimonydescId, req.body, res); 
		// (model, id, request, respond, fieldName, pathName)
	},

	deleteTestimony(req, res){
		return destroy(db.testimonydesc, req.params.testimonydescId, res, 'testimonydesc');
	},



}

      