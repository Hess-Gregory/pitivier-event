const { all, find, create, update, destroy }  = require('../repository/queryRepository');
const { storeImage, updateImage, deleteImage }  = require('../repository/fileRepository');
const   db          = require('../index')

// if in field contain file upload use fileRepository

module.exports = {

    find(req, res){
        return find(db.contact, req.params.contactId, res);
    },

    get(req, res){
        return all(db.contact, res);
    },

    store(req, res){
        return create(db.contact, req.body, res, 'contact'); 
        // (model, request, respond, fieldName, pathName)
    },

    update(req, res){
        return  update(db.contact, req.params.contactId, req.body, res, 'contact'); 
        // (model, id, request, respond, fieldName, pathName)
    },

    delete(req, res){
        return destroy(db.contact, req.params.contactId, req, res, 'contact');
    }

}


