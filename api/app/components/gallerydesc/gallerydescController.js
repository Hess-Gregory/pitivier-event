const { all, find, create, update, destroy }  = require('../repository/queryRepository');
const	db          = require('../index'),
		gallerydesc     = 'gallerydesc',
        Sequelize   = require('sequelize'),
        Op          = Sequelize.Op

// if in field contain file upload use fileRepository
module.exports = {


    findGallery(req, res){
        return find(db.gallerydesc, req.params.gallerydescId, res);
    },

	getGallerys(req, res){
		return all(db.gallerydesc, res);
	},

	storeGallery(req, res){
		return create(db.gallerydesc, req.body, res); 
		// (model, request, respond, fieldName, pathName)
	},

	updateGallery(req, res){
		return update(db.gallerydesc, req.params.gallerydescId, req.body, res); 
		// (model, id, request, respond, fieldName, pathName)
	},

	deleteGallery(req, res){
		return destroy(db.gallerydesc, req.params.gallerydescId, res, 'gallerydesc');
	},



}

      