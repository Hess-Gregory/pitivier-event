const { all, find, create, update, destroy }  = require('../repository/queryRepository');
const { storeImage, updateImage, deleteImage }  = require('../repository/fileRepository');

const db        = require('../index'),
      team      = 'team';

// if in field contain file upload use fileRepository

module.exports = {

   find(req, res){
      return find(db.team, req.params.teamId, res);
   },

   get(req, res){
      return all(db.team, res);
   },

   store(req, res){
      return storeImage(db.team, req, res, 'image', 'team'); 
      // (model, request, respond, fieldName, pathName)
   },

   update(req, res){
      return updateImage(db.team, req.params.teamId, req, res, 'image', 'team'); 
      // (model, id, request, respond, fieldName, pathName)
   },

   delete(req, res){
      return deleteImage(db.team, req.params.teamId, req, res, 'image', 'team');
   }

}