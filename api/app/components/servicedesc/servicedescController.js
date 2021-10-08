const { all, find }  = require('../repository/queryRepository');
const { storeImage, updateImage, deleteImage }  = require('../repository/fileRepository');
const	db          = require('../index'),
		servicedesc     = 'servicedesc',
        Sequelize   = require('sequelize'),
        Op          = Sequelize.Op

// if in field contain file upload use fileRepository
module.exports = {


    findService(req, res){
        return find(db.servicedesc, req.params.servicedescId, res);
    },

	getServices(req, res){
		return all(db.servicedesc, res);
	},

	storeService(req, res){
		return storeImage(db.servicedesc, req, res, 'image', 'Servicedesc'); 
		// (model, request, respond, fieldName, pathName)
	},

	updateService(req, res){
		return updateImage(db.servicedesc, req.params.servicedescId, req, res, 'image', 'Servicedesc'); 
		// (model, id, request, respond, fieldName, pathName)
	},

	deleteService(req, res){
		return deleteImage(db.servicedesc, req.params.servicedescId, req, res, 'image','Servicedesc');
	},



}

      