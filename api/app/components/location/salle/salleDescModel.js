/* jshint indent: 2 */
"use strict";

module.exports = function(sequelize, DataTypes) {
  const locationSalleDesc  = sequelize.define
  ("locationSalleDesc",
    { 
      title: 
        {
          type: DataTypes.STRING
        }, 
      content: 
        {
          type: DataTypes.TEXT
        }, 
      titlelist: 
        {
          type: DataTypes.TEXT
        }
    },
    { tableName:"location_salle_desc", timestamps: false}
  );

  locationSalleDesc.sync().then(() => {
    locationSalleDesc.findOrCreate({
              where: {id: 1},
              defaults: 
                  {
                      title         :     "Location de salles",
                      content       :     "<p>Nous nous chargeons de vous trouver une salle selon votre région, le nombre de convives et selon vos envies. </p><p>Notez que nous travaillons régulièrement dans la salle <a href='http://www.lescaubecq.be/' target='_blank'>Le Scaubecq</a>, salle de banquet et de réception situé à Braine-le-Compte. </p><p>Cette salle, aménagée dans une ancienne ferme, a été entièrement rénovée, et bénéficie d'une cuisine et d'un équipement à la pointe.</p>",
                      titlelist         :     "Salles dans lesquelles nous travaillons",
                      
                  },
              }
          )
  });


const chalk = require('chalk')
  
locationSalleDesc.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'locationSalleDesc'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);

  return locationSalleDesc;
  
};