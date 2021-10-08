const { all, find, create, update, destroy }  = require('../repository/queryRepository');
const	db          = require('../index'),
		blogdesc     = 'blogdesc',
        Sequelize   = require('sequelize'),
        Op          = Sequelize.Op

// if in field contain file upload use fileRepository
module.exports = {


    find(req, res){
        return find(db.blogdesc, req.params.blogdescId, res);
    },

	get(req, res){
		return all(db.blogdesc, res);
	},

	store(req, res){
		return create(db.blogdesc, req.body, res); 
		// (model, request, respond, fieldName, pathName)
	},

	update(req, res){
		return update(db.blogdesc, req.params.blogdescId, req.body, res); 
		// (model, id, request, respond, fieldName, pathName)
	},

	delete(req, res){
		return destroy(db.blogdesc, req.params.blogdescId, res, 'blogdesc');
	},



}

      