const { allAudit, findAudit, createAudit }  = require('../repository/queryRepository');
const   db          = require('../index'),  
        audit      = 'audit';

// if in field contain file upload use fileRepository

module.exports = {

   findAudit(req, res){
      return findAudit(db.audit, req.params.auditId, res);
   },

   getAudits(req, res){
      return allAudit(db.audit, res);
   },

   storeAudit(req, res){
      console.log('store audit req:', req);
      return createAudit(db.audit, req, res); 
      // (model, request, respond, fieldName, pathName)
   },



}