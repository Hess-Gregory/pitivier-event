const { all, find, create, update, destroy }  = require('../repository/queryRepository');
const   db          = require('../index'),  
        socmed      = 'socmed';

// if in field contain file upload use fileRepository

module.exports = {

   findSocmed(req, res){
      return find(db.socmed, req.params.socmedId, res);
   },

   getSocmeds(req, res){
      return all(db.socmed, res);
   },

   storeSocmed(req, res){
      return create(db.socmed, req.body, res); 
      // (model, request, respond, fieldName, pathName)
   },

   updateSocmed(req, res){
      return update(db.socmed, req.params.socmedId, req.body, res); 
      // (model, id, request, respond, fieldName, pathName)
   },

   deleteSocmed(req, res){
      return destroy(db.socmed, req.params.socmedId, res, 'socmed');
   }

}