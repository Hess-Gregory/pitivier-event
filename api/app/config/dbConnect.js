'use strict';

const     fs              = require('fs'),
          path            = require('path'),
          // mysql           = require('mysql2/promise'),
          mysql           = require('mysql2'),
          { Sequelize }   = require('sequelize'),
          debug           = require("debug")("node-server:db"),
          basename        = path.basename(__filename),
          chalk         = require('chalk');

const dbConfig = require('./dbConfig.json');
const express = require('express');

const app    = express();

var db = exports.db = {};

var PRODUCTION    = process.env.NODE_ENV === 'production',
    TEST          = process.env.NODE_ENV === 'test',
    DEVELOPEMENT  = process.env.NODE_ENV === 'development';

if (PRODUCTION) {
  var dbMode = dbConfig['production'];
} 
else if (TEST) {
  var dbMode = dbConfig['test']
} 
else if (DEVELOPEMENT) {
  var dbMode = dbConfig['development'];
}

// create db if it doesn't already exist

const       host        =  dbMode.host,
            port        =  dbMode.port,
            username    =  dbMode.username,
            password    =  dbMode.password,
            database    =  dbMode.database,
            collateSet  =  dbMode.charset_collate,
            charSet     =  dbMode.charset_charater,
            dialect     =  dbMode.dialect

initialize();

async function initialize() 

{
  const connection = mysql.createPool({
        connectionLimit : 10,
        host      : host,
        user      : username,
        password  : password,
        database  : database,
        port      : port
      })
      
      // connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\` DEFAULT CHARACTER SET = \`${charSet}\` ;`, function (error, results, fields) {
      //   if (error) throw error;
      //   console.info(chalk.blueBright("Sequelize : La création de la database est effectuée."));
      //             debug("Sequelize : La création de la database est effectuée.");
      //   });

  // const dbExist = connection.query(`
  //   SELECT SCHEMA_NAME AS \`Database\`
  //   FROM INFORMATION_SCHEMA.SCHEMATA
  //   WHERE SCHEMA_NAME LIKE \`${database}\`
  //   `)
  //   .catch(err => { console.log("Error"); })
//   SELECT SCHEMA_NAME
//   FROM INFORMATION_SCHEMA.SCHEMATA
//  WHERE SCHEMA_NAME = 'pakainfo_v1'

// SELECT SCHEMA_NAME
//   FROM INFORMATION_SCHEMA.SCHEMATA
//  WHERE SCHEMA_NAME = 'DBName'

connection.query(`SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = " \` ${database} \`"`, 
function (error) {
      if (error) throw error;
      console.info(chalk.blueBright("Sequelize : La connection à la database est effectuée."));
      // debug("Sequelize : La création de la database est effectuée.");
      });


//   if (dbExist[0][0]) {
// console.log('il existe')

    // await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\` DEFAULT CHARACTER SET = \`${charSet}\` ;`)
    //     .then(() => {

    //       console.info(chalk.blueBright("Sequelize : La création de la database est effectuée."));
    //       debug("Sequelize : La création de la database est effectuée.");
    //     })
    //     .catch(err => {
    //       console.error(
    //         chalk.red("Sequelize : Impossible de créer la base de donnée MySQL 2")
    //       );
    //       console.log(chalk.red(err))
    //       console.error("Type erreur:", err.name);
    //       console.error("Détail:", err.parent);
      
    //       debug(
    //         "Sequelize - Impossible de créer la base de donnée MySQL, debug:",
    //         err
    //       );
    //     });
        
    // }
    
}

const sequelize = new Sequelize(database, username, password, {
   logging: false,
  host: host,
  dialect: dialect,
  operatorsAliases: 0,

  pool: {
    max: dbMode.pool.max,
    min: dbMode.pool.min,
    acquire: dbMode.pool.acquire,
    idle: dbMode.pool.idle
  }, port: port
});
sequelize
.authenticate()
.then(() => {

  console.info(chalk.blueBright("Sequelize : La connexion MySQL a été établie avec succès."));
  debug("Sequelize : La connexion MySQL a été établie avec succès.1-2");
})
.catch(err => {
  console.error(
    chalk.red("Sequelize : Impossible de se connecter à la base de données MySQL")
  );
  console.error("Type erreur:", err.name);
  console.error("Détail:", err.parent);

  debug(
    "Sequelize - Impossible de se connecter à la base de données MySQL, debug:",
    err
  );
  console.info("Sequelize - Impossible de se connecter à la base de données MySQL, debug:",
    err);
});   


fs
.readdirSync(__dirname)
.filter(file => {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach((file) => {
  const model = require(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
if (db[modelName].associate) {
  db[modelName].associate(db);
}
});

db.Sequelize = Sequelize;
db.sequelize = sequelize; 

sequelize.sync().then(() => {
});

module.exports = db ;      