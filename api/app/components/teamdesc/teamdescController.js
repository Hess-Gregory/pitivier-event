const { all, find, create, update, destroy }  = require('../repository/queryRepository');
const	db          = require('../index'),
		teamdesc     = 'teamdesc',
        Sequelize   = require('sequelize'),
        Op          = Sequelize.Op

// if in field contain file upload use fileRepository
module.exports = {


    findTeam(req, res){
        return find(db.teamdesc, req.params.teamdescId, res);
    },

	getTeams(req, res){
		return all(db.teamdesc, res);
	},

	storeTeam(req, res){
		return create(db.teamdesc, req.body, res); 
		// (model, request, respond, fieldName, pathName)
	},

	updateTeam(req, res){
		return update(db.teamdesc, req.params.teamdescId, req.body, res); 
		// (model, id, request, respond, fieldName, pathName)
	},

	deleteTeam(req, res){
		return destroy(db.teamdesc, req.params.teamdescId, res, 'teamdesc');
	},



}

      