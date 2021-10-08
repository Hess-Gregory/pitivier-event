const    { all, find }  = require('../repository/queryRepository');
const { storeImage, storeMedia, updateImage, deleteImage }  = require('../repository/fileRepository');
const db       = require('../index'),
gallery = 'gallery',
media = 'media';
const formidable= require('formidable');
let form            = new formidable.IncomingForm();



// if in field contain file upload use fileRepository

module.exports = {


   findGallery(req, res){

      return db.gallery.findAll({
          attributes: ['name'],
          include: [{
            model:db.media, as: 'Images',
            attributes: ['image', 'alt'],
            through: {
              attributes: ['galleryId', 'mediaId'],
            }
            }]
        })
          .then(data => {
            res.json(data)
          })
          .catch(err => {
            res.send({ error: 'Échec de la récupération des données'})
        });

      //return find(db.gallery, req.params.galleryId, res);
   },

  //  getGallerys(req, res){
           
  //   return db.gallery.findAll({
  //       attributes: ['name'],
  //       include: [{
  //         model:db.media, as: 'Medias',
  //         attributes: ['image', 'alt'],
  //         through: {
  //           attributes: ['galleryId', 'mediaId'],
  //         }
  //         }]
  //     })
  //       .then(data => {
  //         res.json(data)
  //       })
  //       .catch(err => {
  //         res.send({ error: 'Échec de la récupération des données'})
  //     });

  //  },
   getGallerys(req, res){
           
    return db.media.findAll({
        attributes: ['image', 'alt'],
        include: [{
          model:db.gallery, as: 'Galleries',
          attributes: ['name'],
          through: {
            attributes: ['mediaId','galleryId' ],
          }
          }]
      })
        .then(data => {
          res.json(data)
        })
        .catch(err => {
          res.send({ error: 'Échec de la récupération des données'})
      });

   },
   getListGallerys(req, res){
           
    return db.gallery.findAll({
        attributes: ['name']
      })
        .then(data => {
          res.json(data)
        })
        .catch(err => {
          res.send({ error: 'Échec de la récupération des données'})
      });

   },

   storeGallery(req, res){
      return storeImage(db.gallery, req, res, 'image', 'gallery'); // (model, request, respond, fieldName, pathName)
   },
   storeMedia(req, res){
    form.parse(req, (err, fields, files) => {
      if (fields.galleryId){
        var manyId = fields.galleryId 
        // convert string to array 
        var manyidArr = manyId.split(',');  
        // search and delete all duplicate
        function uniq(a) {
          return a.sort().filter(function(item, pos, ary) {
              return !pos || item != ary[pos - 1];
          });
      } 
      // convert value to number array
      var result = uniq(manyidArr).map(function (x) { 
        return parseInt(x, 10); 
      });
        // manyId.filter((c, index) => {return manyId.indexOf(c) === index;})

    return storeMedia(db.media, req, res, 'image', 'gallery', result); // (model, request, respond, fieldName, pathName)
      }
    })

    return storeImage(db.media, req, res, 'image', 'gallery'); // (model, request, respond, fieldName, pathName)
   },

   updateGallery(req, res){
      return updateImage(db.gallery, req.params.galleryId, req, res, 'image', 'gallery'); // (model, id, request, respond, fieldName, pathName)
   },

   deleteGallery(req, res){
      return deleteImage(db.gallery, req.params.galleryId, req, res, 'image','gallery');
   }

}

      