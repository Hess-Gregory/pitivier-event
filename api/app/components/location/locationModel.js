/* jshint indent: 2 */
"use strict";

module.exports = function(sequelize, DataTypes) {
  const location  = sequelize.define
  ("location",
    { 
      title: 
        {
          type: DataTypes.STRING
        }, 
      content: 
        {
          type: DataTypes.TEXT
        }
    },
    { tableName:"location", timestamps: false}
  );

  location.sync().then(() => {
    location.findOrCreate({
              where: {id: 1},
              defaults: 
                  {
                      title         :     "Location",
                      content       :     "<p>Voici nos prestataires et nos partenaires de location pour vos évenements.</p>"
                      
                  },
              }
          )
  });

const chalk = require('chalk')
  
location.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'location'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
  return location;
  
};