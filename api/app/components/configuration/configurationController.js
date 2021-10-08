const { all, find, update }  = require('../repository/queryRepository');
const { storeImage, updateImage, deleteImage, updateImages }  = require('../repository/fileRepository');

const formidable= require('formidable');
let form            = new formidable.IncomingForm();
const  db         = require('../index'),
       configuration    = 'configuration'

// if in field contain file upload use fileRepository

module.exports = {

   find(req, res){
      return find(db.configuration, req.params.configurationId, res);
   },

   get(req, res){
      return all(db.configuration, res);
   },

   update(req, res){
      form.parse(req, (err, fields, files) => {
      if(Object.keys(files).length === 0) {
         req.body = fields
         return update(db.configuration, req.params.configurationId,  req.body, res, 'configuration');
       }

      else if(Object.keys(files).length >= 1){
         const imgObjet = Object.keys(files)
         return updateImages(db.configuration, req.params.configurationId, req, res, imgObjet , 'configuration', err, fields, files)    
       }
      })
   },

}

      