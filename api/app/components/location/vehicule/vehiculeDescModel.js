/* jshint indent: 2 */
"use strict";

module.exports = function(sequelize, DataTypes) {
  const locationVehiculeDesc  = sequelize.define
  ("locationVehiculeDesc",
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
    { tableName:"location_vehicule_desc", timestamps: false}
  );

  locationVehiculeDesc.sync().then(() => {
    locationVehiculeDesc.findOrCreate({
              where: {id: 1},
              defaults: 
                  {
                      title         :     "Location de véhicules de prestige",
                      content       :     "<p>Nous travaillons en collaboration avec <a href='http://www.jrg-businesscars.be/' target='_blank'>JRG Business Cars</a> qui vous propose un service de location de limousines, voitures anciennes, minibus, autocars,...avec chauffeurs.</p><p>Plus de 400 véhicules, équipés selon vos besoins; prêts à vous emmener là où vous le souhaitez.Transferts d'aéroports, Navettes, Excursions, Mariages, SoiréesJRG,... On s'occupe de tout.</p>"
                      
                  },
              }
          )
  });

const chalk = require('chalk')
  
locationVehiculeDesc.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'locationVehiculeDesc'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);

  return locationVehiculeDesc;
  
};