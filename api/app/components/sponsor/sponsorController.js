const { all, find }  = require('../repository/queryRepository');
const { storeImage, updateImage, deleteImage }  = require('../repository/fileRepository');
const db          = require('../index'),
      sponsor    = 'sponsor';

// if in field contain file upload use fileRepository

module.exports = {

   find(req, res){
      return find(db.sponsor, req.params.sponsorId, res);
   },

   get(req, res){
      return all(db.sponsor, res);
   },

   store(req, res){
      return storeImage(db.sponsor, req, res, 'image', 'sponsor'); 
      // (model, request, respond, fieldName, pathName)
   },

   update(req, res){
      return updateImage(db.sponsor, req.params.sponsorId, req, res, 'image', 'sponsor'); 
      // (model, id, request, respond, fieldName, pathName)
   },

   delete(req, res){
      return deleteImage(db.sponsor, req.params.sponsorId, req, res, 'image','sponsor');
   }
}

      