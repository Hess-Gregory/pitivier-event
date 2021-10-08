const { all, find, create, update, destroy }  = require('../repository/queryRepository');
const { storeImage, updateImage, deleteImage }  = require('../repository/fileRepository');

const db          = require('../index'), 
      testimony   = 'testimony';
        

// if in field contain file upload use fileRepository

module.exports = {

   find(req, res){
      return find(db.testimony, req.params.testimonyId, res);
   },

   get(req, res){
      return all(db.testimony, res);
   },

   store(req, res){
      return storeImage(db.testimony, req, res, 'image', 'testimony'); 
      // (model, request, respond, fieldName, pathName)
   },

   update(req, res){
      return updateImage(db.testimony, req.params.testimonyId, req, res, 'image', 'testimony'); 
      // (model, id, request, respond, fieldName, pathName)
   },

   delete(req, res){
      return deleteImage(db.testimony, req.params.testimonyId, req, res, 'image', 'testimony');
   }

}