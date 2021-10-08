const { all, find }  = require('../repository/queryRepository');
const { storeImage, updateImage, deleteImage }  = require('../repository/fileRepository');
const   db      = require('../index'),
        blog    = 'blog'

// if in field contain file upload use fileRepository

module.exports = {

    find(req, res){
        return find(db.blog, req.params.blogId, res);
    },

    get(req, res){
        return all(db.blog, res);
    },

    store(req, res){
        return storeImage(db.blog, req, res, 'image', 'Blog'); 
        // (model, request, respond, fieldName, pathName)
    },
    
    update(req, res){
        return updateImage(db.blog, req.params.blogId, req, res, 'image', 'Blog'); 
        // (model, id, request, respond, fieldName, pathName)
    },

    delete(req, res){
        return deleteImage(db.blog, req.params.blogId, req, res, 'image','Blog');
    }
}

