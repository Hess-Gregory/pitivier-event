/* jshint indent: 2 */
"use strict";

module.exports = function(sequelize, DataTypes) {
  const locationVehiculeItem  = sequelize.define
  ("locationVehiculeItem",
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
    { tableName:"location_vehicule_item", timestamps: false}
  );



const chalk = require('chalk')
  
locationVehiculeItem.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'locationVehiculeItem'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);

  return locationVehiculeItem;
  
};