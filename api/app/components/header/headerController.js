const { all, find, findBy }  = require('../repository/queryRepository');
const { storeImage, updateImage, deleteImage }  = require('../repository/fileRepository');
const   header      = 'header',
        db          = require('../index'),
        Sequelize   = require('sequelize'),
        Op          = Sequelize.Op

// if in field contain file upload use fileRepository

module.exports = {

	capitalizeFirstLetter(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	},

	findHeader(req, res){
		return find(db.header, req.params.headerId, res);
	},

	getHeaders(req, res){
		return all(db.header, res);
	},

	findHeaderByPage(req, res) {
		const param = { page: 
		req.params.page.charAt(0).toUpperCase() + req.params.page.slice(1) 
		};
		findBy(db.header, param, res);
	},

	storeHeader(req, res){
		return storeImage(db.header, req, res, 'image', 'header'); 
		// (model, request, respond, fieldName, pathName)
	},

	updateHeader(req, res){
		return updateImage(db.header, req.params.headerId, req, res, 'image', 'header'); 
		// (model, id, request, respond, fieldName, pathName)
	},

	deleteHeader(req, res){
		return deleteImage(db.header, req.params.headerId, req, res, 'image','header');
	},

	existHeader(req, res){
		Promise
		.all([
		req.body.page && db.header
		// .count({'page': req.body.page, 'id': {[Op.ne]: req.params.headerId} }),
		.findAndCountAll({
				where: 
					{
						page: req.body.page, 
						[Op.and]: 
						{id: {[Op.ne]: req.params.headerId}}
					}
			})
			])
		.then( ([ foundPage ]) => {
			
		if(foundPage > 0) {
			res.json({exist: true, msg: 'L\'en-tête pour la page  '+ req.body.page +' existe déjà'})
		} else {
			return res.json({exist: false})	
		}
		
		}).catch(err => {
			console.log(err)
			res.json({exist: true, msg: 'Échec de la vérification de l\'existence'})
		});
	}
}

