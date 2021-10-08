'use strict'
const   db          = require('../index'),  
        audit      = 'audit';

exports.findCondition = async (model, condition, res) => {
   console.log('find model', model,' where: {'
      , condition, '}'
    );
  return model.findOne({ where: condition})

}

exports.find = async (model, id, res) => {
   console.log('find model : ', model, 'id :', id)
   const bodyAudit = {}
   bodyAudit.type = 'findOne where id';
   bodyAudit.model = 'db.'+model.name;
   bodyAudit.data = 'findOne({where: {id: '+id+'}})';
  bodyAudit.id_model = Number(id);
    model.findOne({
        where: {
          id: id
        }
      })
         .then(data => {
            if(data){
               console.log('lecture du model 2: ', model)
               db.audit.create(bodyAudit)
                res.json(data)    
            } else {
               console.log("error: 'ID non trouvé'")
                res.send({ error: 'ID non trouvé'})
            }
            
         })
         .catch(err => {
            console.log("error: 'ID non trouvé'", err)
            res.send({ error: 'ID non trouvé'})
         });
}

exports.findAudit = async (model, id, res) => {
   console.log('find model : ', model, 'id :', id)
    model.findOne({
        where: {
          id: id
        }
      })
         .then(data => {
            if(data){
               console.log('lecture du model 2: ', model)
                res.json(data)    
            } else {
               console.log("error: 'ID non trouvé'")
                res.send({ error: 'ID non trouvé'})
            }
            
         })
         .catch(err => {
            console.log("error: 'ID non trouvé'", err)
            res.send({ error: 'ID non trouvé'})
         });
}
/**
 * Get all object by model
 */
exports.findBy = (model, condition, res) => {
   console.log('findBy model : ', model, 'condition :', condition)
   const bodyAudit = {}
   bodyAudit.type = 'find where condition';
   bodyAudit.model = 'db.'+model.name;
   bodyAudit.data = 'findAll({where: '+condition+'})';

    model.findAll({where: condition})
         .then(data => { 
            res.json(data) 
            db.audit.create(bodyAudit)
         })
         .catch(err => { 
            res.send({ error: condition+' non trouvé'}) 
            console.log("error: ", condition, " non trouvé ", err)
         
         });
};

/**
 * Get all object by model
 */
exports.all = (model, res) => {
   console.log('Export model : ', model)
   
   const bodyAudit = {}
   bodyAudit.type = 'findAll';
   bodyAudit.model = 'db.'+model.name;
   bodyAudit.data = 'findAll({})';

    model.findAll({})
         .then(data => {
            res.json(data)
            db.audit.create(bodyAudit)
         })
         .catch(err => {
            res.send({ error: 'Échec de la récupération des données'})
            console.log("error: Échec de la récupération des données ", err)
        });
};
/**
 * Get all object by model
 */
 exports.allAudit = (model, res) => {
   console.log('Export model : ', model)

    model.findAll({})
         .then(data => {
            res.json(data)
         })
         .catch(err => {
            res.send({ error: 'Échec de la récupération des données'})
            console.log("error: Échec de la récupération des données ", err)
        });
};
/**
 * Get all object by model
 */
 exports.allInclude = (model, res, include) => {
   console.log('allInclude model : ', model, 'include : ', include)
   const bodyAudit = {}
   bodyAudit.type = 'FindAll where include';
   bodyAudit.model = 'db.'+model.name;
   bodyAudit.data = 'findAll({include: '+include+'})';

   model.findAll({
      include: [include],
   })
        .then(data => {
           res.json(data)
           db.audit.create(bodyAudit)
           //console.log('les data reçus: ', JSON.stringify(data))
        })
        .catch(err => {
           res.send({ error: 'Échec de la récupération des données'})
       });
};

/**
 * Get all object by model
 */
 exports.allIncludeById = (model, id, res, include) => {
   console.log('allInclude model : ', model, 'id :',id,'include : ', include)
   

   const bodyAudit = {}
   bodyAudit.type = 'find by id and where include';
   bodyAudit.model = 'db.'+model.name;
   bodyAudit.id_model = Number(id);
   bodyAudit.data = 'findByPk('+id+',{include: '+include+'})';


  model.findByPk(id,{
     include: [include],
  })
       .then(data => {
          res.json(data)
          db.audit.create(bodyAudit)
       })
       .catch(err => {
          res.send({ error: 'Échec de la récupération des données'})
      });
};
/**
 * create new object
 */
exports.create = (model, body, res) => {

   console.log('Data create model: "', model, '" ' , body)
 
   const bodyAudit = {}
   bodyAudit.type = 'create';
   bodyAudit.model = 'db.'+model.name;
   //bodyAudit.id_model = Number(id);
   bodyAudit.data = body;

   if (body.price === ''){ body.price=null}
    model.create(body)
         .then(data => {
            res.json(data);
            bodyAudit.id_model = data.dataValues.id;
            db.audit.create(bodyAudit)
         })
         .catch(err => {
            res.status(400).send(err);
         });
};
/**
* create a audit
*/
exports.createAudit = (model, body, res) => {
   model.create(body)
        .then(data => {
           res.json(data);
        })
        .catch(err => {
           res.status(400).send(err);
        });
};
/**
 * create new object
 */
 exports.createItem = (model, body, catId, res) => {
   console.log('Data create Item model: "', model, '" ' , body)
    
   const bodyAudit = {}
   bodyAudit.type = 'create item';
   bodyAudit.model = 'db.'+model.name;
   //bodyAudit.id_model = Number(id);
   bodyAudit.data = body;

   model.create(body)
        .then(data => {
           res.json(data);
           bodyAudit.id_model = data.dataValues.id;
           db.audit.create(bodyAudit)
        })
        .catch(err => {
           res.status(500).send(err);
        });
};
/**
 * update model by id
 */
exports.update = (model, id, body, res) => {
   console.log('Data update model: "', model ,'" id: "', id, '" ' , body)
if (body.price){
   (body.price === '')?
      body.price =null : body.price = body.price

}
if (body.visible){
   (typeof body.visible === 'string')?
      (body.visible == 'true')?
         body.visible = false
      :
         body.visible = true
   : ''
}

   const bodyAudit = {}
   bodyAudit.type = 'update';
   bodyAudit.model = 'db.'+model.name;
   bodyAudit.id_model = Number(id);
   bodyAudit.data = body;
console.log('body update:', body)
    model.update(body,
                {where: { id: id }}
                 )
                 .then(data => {
                    res.json({data})
                 })
         .then( db.audit.create(bodyAudit) )
         .catch(err => {
            res.status(500).send(err);
            // res.status(500).json({err});
         });
};

/**
 * delete model by id
 */
exports.destroy = (model, id, res, message) => {
   console.log('Delete model: "', model ,'" id: "', id)
   const token = req.header('x-access-token') || '';
   const decoded = jwt.decode(token, { complete: true });


   const bodyAudit = {}
   bodyAudit.type = 'delete';
   bodyAudit.model = 'db.'+model.name;
   bodyAudit.id_model = Number(id);

   model.destroy({
        where: {
          id: id
        }})
         .then(data => {
                res.json({ message: `${message} ${id} supprimé avec succès` })
         })
         .then( db.audit.create(bodyAudit) )
         .catch(err => {
            res.status(400).json({err});
         });
};


