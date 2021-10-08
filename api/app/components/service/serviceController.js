const { all, find, create, update, destroy }  = require('../repository/queryRepository');
const	db          = require('../index'),
		service     = 'service',
        Sequelize   = require('sequelize'),
        Op          = Sequelize.Op

// if in field contain file upload use fileRepository
module.exports = {

	findService(req, res){
		return find(db.service, req.params.serviceId, res);
	},

	getServices(req, res){
		return all(db.service, res);
	},

	storeService(req, res){
		return create(db.service, req.body, res); 
		// (model, request, respond, fieldName, pathName)
	},

	updateService(req, res){
		return update(db.service, req.params.serviceId, req.body, res); 
		// (model, id, request, respond, fieldName, pathName)
	},

	deleteService(req, res){
		return destroy(db.service, req.params.serviceId, res, 'service');
	},

	existService(req, res){
		if (req.params.serviceId){
			Promise
			.all([
			req.body.title && db.service.findAndCountAll({
					where: 
						{
							title: req.body.title, 
							[Op.and]: 
							{id: {[Op.ne]: req.params.serviceId}}
						}
				})
			])
			.then( ([ foundTitle ]) => {
				
			if(foundTitle > 0) {
				res.json({exist: true, msg: 'Le titre existe déjà'})
			} else {
				return res.json({exist: false , msg: 'Le titre n\'existe pas'})	
			}
			
			})
			.catch(err => {
				console.log(err)
				res.json({exist: true, msg: 'Échec de la vérification de l\'existence'})
			});

		}else{
			Promise
			.all([
			req.body.title && db.service.findAndCountAll({
					where: 
						{
							title: req.body.title
						}
				})
			])
			.then( ([ foundTitle ]) => {
				
			if(foundTitle > 0) {
				res.json({exist: true, msg: 'Le titre existe déjà'})
			} else {
				return res.json({exist: false , msg: 'Le titre n\'existe pas'})	
			}
			
			})
			.catch(err => {
				console.log(err)
				res.json({exist: true, msg: 'Échec de la vérification de l\'existence'})
			});
			
		}
	}

}

      