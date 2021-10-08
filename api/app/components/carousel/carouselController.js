const { all, find }  = require('../repository/queryRepository');
const  { storeImage, updateImage, deleteImage } = require('../repository/fileRepository');
const db          = require('../index'),
      carousel    = 'carousel';

// if in field contain file upload use fileRepository

module.exports = {

   find(req, res){
      return find(db.carousel, req.params.carouselId, res);
   },

   get(req, res){
      return all(db.carousel, res);
   },

   store(req, res){
      return storeImage(db.carousel, req, res, 'image', 'carousel'); 
      // (model, request, respond, fieldName, pathName)
   },

   update(req, res){
      return updateImage(db.carousel, req.params.carouselId, req, res, 'image', 'carousel'); 
      // (model, id, request, respond, fieldName, pathName)
   },

   delete(req, res){
      return deleteImage(db.carousel, req.params.carouselId, req, res, 'image','carousel');
   }
}

      