var 
express     = require('express'),
middleware  = require('./middleware'),
routes      = require('./routes'),
app         = express();


// Charger les route ('controller" -ish)
app.use(middleware)
app.use('/api', routes)

app.get('/',(req,res)=>{
    res.send('<h1>It works! </h1><p>NodeJS ' + process.versions.node + '\n</p>');
 });

 //Exportation de l'instance app pour test unitaire via supertest
 module.exports = app
