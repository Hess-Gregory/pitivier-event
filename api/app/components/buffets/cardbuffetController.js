const { allInclude, allIncludeById, create, update, destroy,all, find }  = require('../repository/queryRepository');
const { storeImage, updateImage, deleteImage }  = require('../repository/fileRepository');
const   db      = require('../index'),
cardBuffet    = 'cardBuffets',
buffet    = 'buffets'
const formidable = require('formidable');
let form            = new formidable.IncomingForm();

module.exports = {

  //ok get
  // Get all Tutorials include comments
  getAllCardBuffets(req, res){
    return allInclude(db.cardBuffets, res, "buffets");
  },

  //ok get
  // Get all Tutorials include comments
  getAllbuffets(req, res){
    return allInclude(db.buffets, res, "cardBuffet");
  },

  //ok get cat
  // Get the comments for a given tutorial
  findCat(req, res){
    return allIncludeById(db.cardBuffets, req.params.Id, res, "buffets");
  },
  // Create and Save new Tutorials
  storeCat(req, res){
    return create(db.cardBuffets, req.body, res); 
  // (model, request, respond, fieldName)
  },
  updateCat(req, res){
    return update(db.cardBuffets, req.params.Id, req.body, res); 
  // (model, id, request, respond)
  },
  deleteCat(req, res){
    return destroy(db.cardBuffets, req.params.Id, res, 'cardBuffets');
  },



  // Get the comments for a given comment id
  findItem(req, res){
    return allIncludeById(db.buffets, req.params.Id, res, "cardBuffet");
  // (model, request, respond, fieldName, pathName)
  },


  storeItem(req, res){
    
    form.parse(req, (err, fields, files) => {
      const body = fields;
      console.log('body dans buffet add:', body)
      if (body){
        if (body.image =='undefined' || !body.image ){
          req.body = body
          return create(db.buffets, req.body, res);
      }
         else{
       return storeImage(db.buffets, req, res, 'image', 'buffet'); 
     // (model, request, respond, fieldName, pathName)       
         }
      }
    })

  },


  updateItem(req, res){
    return updateImage(db.buffets, req.params.Id, req, res, 'image', 'buffet'); 
  // (model, id, request, respond)
  },
  deleteItem(req, res){
    return deleteImage(db.buffets, req.params.Id, req, res, 'image','buffet');
  },


  findBuffetdesc(req, res){
    return find(db.buffetdesc, req.params.buffetdescId, res);
 },

 getBuffetdescs(req, res){
    return all(db.buffetdesc, res);
 },

 storeBuffetdesc(req, res){
    return create(db.buffetdesc, req.body, res); 
    // (model, request, respond, fieldName, pathName)
 },

 updateBuffetdesc(req, res){
    return update(db.buffetdesc, req.params.buffetdescId, req.body, res); 
    // (model, id, request, respond, fieldName, pathName)
 },

 deleteBuffetdesc(req, res){
    return destroy(db.buffetdesc, req.params.buffetdescId, res, 'buffetdesc');
 }
}