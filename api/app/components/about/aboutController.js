const { all, find, update } = require('../repository/queryRepository');
const { storeImage, updateImages, deleteImage } = require('../repository/fileRepository');
const formidable= require('formidable');
let form        = new formidable.IncomingForm();
const   db       = require('../index'),
        about    = 'about'

module.exports = {

    find(req, res){
        return find(db.about, req.params.aboutId, res);
    },

    get(req, res){
        return all(db.about, res);
    },

    store(req, res){
        return storeImage(db.about, req, res,  ['image','image1', 'image2', 'image3', 'image4'], 'About'); 
        // (model, request, respond, fieldName, pathName)
    },

    // update(req, res){
    //     return updateImage(db.about, req.params.aboutId, req, res,  ['image','image1', 'image2', 'image3', 'image4'], 'About'); 
    //     // (model, id, request, respond, fieldName, pathName)
    // },

    update(req, res){
        form.parse(req, (err, fields, files) => {
        if(Object.keys(files).length === 0) {
           req.body = fields
           return update(db.about, req.params.aboutId, req.body, res, 'About');
         }
  
        else if(Object.keys(files).length >= 1){
           const imgObjet = Object.keys(files)
           return updateImages(db.about, req.params.aboutId, req, res, imgObjet , 'About', err, fields, files)    
         }
        })
     },





    delete(req, res){
        return deleteImage(db.about, req.params.aboutId, req, res,  ['image','image1', 'image2', 'image3', 'image4'],'About');
    }

}

