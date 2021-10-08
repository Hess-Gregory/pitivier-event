const { allInclude, allIncludeById, create, update, destroy,all, find }  = require('../repository/queryRepository');
const { storeImage, updateImage, deleteImage }  = require('../repository/fileRepository');
const   db      = require('../index'),
card    = 'cards',
menu    = 'menus'
const formidable= require('formidable');
let form            = new formidable.IncomingForm();


module.exports = {

  //ok get
  // Get all Tutorials include comments
  getAllCards(req, res){
    return allInclude(db.cards, res, "menus");
  },

  //ok get
  // Get all Tutorials include comments
  getAllmenus(req, res){
    return allInclude(db.menus, res, "card");
  },

  //ok get cat
  // Get the comments for a given tutorial
  findCat(req, res){
    return allIncludeById(db.cards, req.params.Id, res, "menus");
  },
  // Create and Save new Tutorials
  storeCat(req, res){
    return create(db.cards, req.body, res); 
  // (model, request, respond, fieldName)
  },
  updateCat(req, res){
    return update(db.cards, req.params.Id, req.body, res); 
  // (model, id, request, respond)
  },
  deleteCat(req, res){
    return destroy(db.cards, req.params.Id, res, 'cards');
  },



  // Get the comments for a given comment id
  findItem(req, res){
    return allIncludeById(db.menus, req.params.Id, res, "card");
  // (model, request, respond, fieldName, pathName)
  },

  storeItem(req, res){  

    form.parse(req, (err, fields, files) => {
      const body = fields;

      if(Object.keys(files).length === 1){
        return storeImage(db.menus, req, res, 'image', 'menu'); 
      }
      else{
        req.body = body
        return create(db.menus, req.body, res);
      } 

      })
    },
    
  

  updateItem(req, res){
    return updateImage(db.menus, req.params.Id, req, res, 'image', 'menu'); 
  // (model, id, request, respond)
  },
  deleteItem(req, res){
    return deleteImage(db.menus, req.params.Id, req, res, 'image','menu');
  },


  findMenudesc(req, res){
    return find(db.menudesc, req.params.menudescId, res);
 },

 getMenudescs(req, res){
    return all(db.menudesc, res);
 },

 storeMenudesc(req, res){
    return create(db.menudesc, req.body, res); 
    // (model, request, respond, fieldName, pathName)
 },

 updateMenudesc(req, res){
    return update(db.menudesc, req.params.menudescId, req.body, res); 
    // (model, id, request, respond, fieldName, pathName)
 },

 deleteMenudesc(req, res){
    return destroy(db.menudesc, req.params.menudescId, res, 'menudesc');
 }
}