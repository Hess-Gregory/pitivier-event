/* jshint indent: 2 */
"use strict";

module.exports = function(sequelize, DataTypes) {
  const locationMaterielItem  = sequelize.define
  ("locationMaterielItem",
    { 
      name: 
        {
          type: DataTypes.STRING(50)
        }, 
      address: 
        {
          type: DataTypes.STRING(150)
        }, 
      phone: 
        {
          type: DataTypes.STRING(20)
        },  
      phone2: 
        {
          type: DataTypes.STRING(20)
        }, 
      mail: 
        {
          type: DataTypes.STRING(50)
        }, 
      website: 
        {
          type: DataTypes.STRING(100)
        }, 
      info: 
        {
          type: DataTypes.STRING(100)
        }, 
      image: 
        {
          type: DataTypes.STRING(400)
        }
    },
    { tableName:"location_materiel_item", timestamps: false}
  );

const chalk = require('chalk')
  
locationMaterielItem.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'locationMaterielItem'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);

  return locationMaterielItem;
  
};