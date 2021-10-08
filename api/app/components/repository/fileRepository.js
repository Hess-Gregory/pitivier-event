const path = require('path'),
express = require('express'),
formidable = require('formidable'),
fs = require('fs'),
mv = require('mv'),
{ create, find, update, destroy } = require('./queryRepository');

const app = express(),
      join = require('path').join,
      uploadPath = path.join(__dirname, '../../../', 'uploaded_files/');

/**
 * store image and record
 */
 exports.storeMedia = (model, req, res, inputField, path, manyId) => {
   console.log('les many recu storeMedia:', manyId)
  let form            = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.multiples      = true;
  form.onPart = function (part) {
      if(!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
        
        this.handlePart(part);
        
      }
      else {
        return res.status(400).json({
          error: part.filename + 'n\'est pas autorisé'
        })
      }
  }
  

  form.on('fileBegin', (name, file) => {
    
    let fileExt = file.name.split('.').pop();
    file.name = imageNaming(path, fileExt)
    file.path = uploadPath + path + '/' + file.name
  })

  form.parse(req, (err, fields, files) => {
    
      if (err) {
        return res.status(400).json({
          error: ' L\'image n\'a pas pu être téléchargée'
        })
      }

      if (files[inputField]) {
        // 1kb = 1000
        // 10kb = 10000
        // 100kb = 100000
        // 1MB = 1000000
       
        if (files[inputField].size > 5000000) {
          return res.status(400).json({
            error: 'La taille de l\'image doit être inférieure à 5 Mo'
          })
        }

        fields[inputField] = files[inputField].name;
      } else {
        return res.status(400).json({
          error: 'Aucune image trouvée'
        })
      }

      create(model, fields, res,manyId)

      
  })
}

/**
 * store image and record
 */
 exports.storeImage = (model, req, res, inputField, path) => {
  console.log('storeImage')
 let form            = new formidable.IncomingForm();
 form.keepExtensions = true;
 form.multiples      = true;
 form.onPart = function (part) {
     if(!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
       
       this.handlePart(part);
       
     }
     else {
       return res.status(400).json({
         error: part.filename + 'n\'est pas autorisé'
       })
     }
 }
 

 form.on('fileBegin', (name, file) => {
   
   let fileExt = file.name.split('.').pop();
   file.name = imageNaming(path, fileExt)
   file.path = uploadPath + path + '/' + file.name
 })

 form.parse(req, (err, fields, files) => {
   
     if (err) {
       return res.status(400).json({
         error: ' L\'image n\'a pas pu être téléchargée'
       })
     }

     if (files[inputField]) {
       // 1kb = 1000
       // 10kb = 10000
       // 100kb = 100000
       // 1MB = 1000000
      
       if (files[inputField].size > 5000000) {
         return res.status(400).json({
           error: 'La taille de l\'image doit être inférieure à 5 Mo'
         })
       }

       fields[inputField] = files[inputField].name;
     } else {
       return res.status(400).json({
         error: 'Aucune image trouvée'
       })
     }
     create(model, fields, res)
     
 })
}
//         fields[inputField] = files[inputField].name;
//       }
//       else if (!files[inputField]) {
//         create(model, fields, res)

//         //fields[inputField] = files[inputField].name;
//       }  
//       else {
//         return res.status(400).json({
//           error: 'Aucune image trouvée'
//         })
//       }
//       create(model, fields, res)
      
//   })
// }

/**
* update image and record
*/
exports.updateImages = (model, id, req, res, inputField, path, err, fields, filess) => {
  let form = new formidable.IncomingForm()
  
  form.keepExtensions = true
  

  // validation format type
  form.onPart = function (part) {
      if(!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
          this.handlePart(part);
      } else {
        return res.status(400).json({
          error: part.filename + ' n\'est pas autorisé'
        })
      }
  }
  
  // file naming
  form.on('fileBegin', (name, file) => {
    let fileExt = file.name.split('.').pop();
    file.name = imageNaming(path, fileExt)
    file.path = uploadPath + path + '/' + file.name
  })
  

    let files = filess
      if (err) { 
        
        res.status(400).json({ error: " L'image n'a pas pu être téléchargée" }) 
      }
          // if file input exist
          if (files[inputField]){
          // 1kb = 1000
          // 10kb = 10000
          // 100kb = 100000
          // 1MB = 1000000
          if (files[inputField].size > 5000000) 
          {res.send({error: 'La taille de l\'image doit être inférieure à 5 Mo' })}
          // check if id exist
          model.findOne({where: { id: id } })
              .then(newModel => {
                  if(newModel){
                    // delete old image
                    deleteOldImage(model, id, path, inputField, res)
                    // set field input file from file name
                    fields[inputField] = files[inputField].name;
                    // update record
                    update(model, id, fields, res);
                  } else {
                    res.send({ error: 'ID introuvable'})
                  }
                  
              })
              .catch(err => {
                // remove file uploaded without update record
                if (fs.existsSync(uploadPath + path + '/' + files[inputField].name)) {
                  fs.unlinkSync(uploadPath + path + '/' + files[inputField].name)
                } 
                res.send({ error: 'ID introuvable'})
              });
          } 
        
        else {
          // update record without file upload but check if id exist first 
          model.findOne({ where: { id: id }})
              .then(newModel => {
                
                  if(newModel){ update(model, id, fields, res);}
                  else { res.send({ error: 'ID introuvable'}) }
                    
              })
              .catch(err => {
                console.log(err)
                  res.send({ error: 'ID introuvable'})
              });
        }
  
      // }
 
  
    
  }




  

  
exports.updateImage = (model, id, req, res, inputField, path, err, fields, filess) => {
  let form = new formidable.IncomingForm()
  
  form.keepExtensions = true
  

  // validation format type
  form.onPart = function (part) {
      if(!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
          this.handlePart(part);
      } else {
        return res.status(400).json({
          error: part.filename + ' n\'est pas autorisé'
        })
      }
  }
  
  // file naming
  form.on('fileBegin', (name, file) => {
    let fileExt = file.name.split('.').pop();
    file.name = imageNaming(path, fileExt)
    file.path = uploadPath + path + '/' + file.name
  })
  
  // parse form
  form.parse(req, (err, fields, files) => 
  {
      if (err) { 
        
        res.status(400).json({ error: " L'image n'a pas pu être téléchargée" }) 
      }
          // if file input exist
          if (files[inputField]){
          // 1kb = 1000
          // 10kb = 10000
          // 100kb = 100000
          // 1MB = 1000000
          if (files[inputField].size > 5000000) 
          {res.send({error: 'La taille de l\'image doit être inférieure à 5 Mo' })}
          // check if id exist
          model.findOne({where: { id: id } })
              .then(newModel => {
                  if(newModel){
                    // delete old image
                    deleteOldImage(model, id, path, inputField, res)
                    // set field input file from file name
                    fields[inputField] = files[inputField].name;
                    // update record
                    update(model, id, fields, res);
                  } else {
                    res.send({ error: 'ID introuvable'})
                  }
                  
              })
              .catch(err => {
                // remove file uploaded without update record
                if (fs.existsSync(uploadPath + path + '/' + files[inputField].name)) {
                  fs.unlinkSync(uploadPath + path + '/' + files[inputField].name)
                } 
                res.send({ error: 'ID introuvable'})
              });
          } 
        
        else {
          // update record without file upload but check if id exist first 
          model.findOne({ where: { id: id }})
              .then(newModel => {
                
                  if(newModel){ update(model, id, fields, res);}
                  else { res.send({ error: 'ID introuvable'}) }
                    
              })
              .catch(err => {
                console.log(err)
                  res.send({ error: 'ID introuvable'})
              });
        }
  
      // }
  })
  
    
  }


/**
* delete image and record
*/
exports.deleteImage = (model, id, req, res, inputField, path) => {
// check if id exist
model.findOne({
      where: {
        id: id
      }
    })
     .then(newModel => {
        if(newModel){
          // delete old image
          deleteOldImage(model, id, path, inputField, res)
          destroy(model, id, res, path)
        } else {
          res.send({ error: 'ID introuvable'})
        }
      })
      .catch(err => {
          res.send({ error: 'ID introuvable'})
      });
}


/**
* remove old image by old name
*/
const deleteOldImage = (model, id, path, inputField, res) => {
model.findOne({
      where: {id: id}
    }, (err, thisModel) => {
    if (err) {
        res.send(err);
    }

    try {
      if (fs.existsSync(uploadPath + path + '/' + thisModel[inputField])) {
        fs.unlinkSync(uploadPath + path + '/' + thisModel[inputField])
      }
      //file removed
    } catch(err) {
      res.send({
        error: "L'image ne peut pas être supprimée"
      })
    }
});

}

/**
* image naming
*/
const imageNaming = (path, extension) => {
  return path + '_' + Date.now() + '.' + extension; 
}
