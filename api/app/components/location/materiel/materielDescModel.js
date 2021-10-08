/* jshint indent: 2 */
"use strict";

module.exports = function(sequelize, DataTypes) {
  const locationMaterielDesc  = sequelize.define
  ("locationMaterielDesc",
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
    { tableName:"location_materiel_desc", timestamps: false}
  );

  locationMaterielDesc.sync().then(() => {
    locationMaterielDesc.findOrCreate({
              where: {id: 1},
              defaults: 
                  {
                      title         :     "Location de matériel",
                      content       :     "<p> Nous travaillons en collaboration avec Banquet Location. <br /> Visitez leur site : <a href='http://www.banquetslocations.be/' target='_blank'>www.banquetslocations.be</a></p><p>Nous travaillons également en collaboration avec CdS Location.<br />Visitez leur site : <a href='http://www.cdsloc.com/' target='_blank'> www.cdsloc.com</a></p>"
                      
                  },
              }
          )
  });

const chalk = require('chalk')
  
locationMaterielDesc.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'locationMaterielDesc'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
  return locationMaterielDesc;
  
};