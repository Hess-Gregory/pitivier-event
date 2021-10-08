/* jshint indent: 2 */
"use strict";

module.exports = function(sequelize, DataTypes) {
  const locationSalleItem  = sequelize.define
  ("locationSalleItem",
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
    { tableName:"location_salle_item", timestamps: false}
  );

  locationSalleItem.sync().then(() => {
          locationSalleItem.findOrCreate({
                    where: {id: 1},
                    defaults: 
                        {
                            name         :     "Le Scaubecq",
                            address      :     "Chemin de Mariemont 7 à 7090 Braine-Le-Comte",
                            phone        :     "067 / 63 74 44",
                            phone2       :     "0495 / 26 34 72",
                            mail         :     "info@lescaubecq.be",
                            website      :     "www.lescaubecq.be",
                            info         :     "Capacité de 200 personnes"
                            
                        },
                    }
                ),
          locationSalleItem.findOrCreate({
                    where: {id: 2},
                    defaults: 
                        {
                            name         :     "La Dolce Vita",
                            address      :     "Place Josse Goffin 34 à 1480 Clabecq",
                            phone        :     "0495 / 85 28 32",
                            mail         :     "info@ladolcevita.be",
                            website      :     "www.ladolcevita.be",
                            info         :     "Capacité de 60 personnes"
                            
                        },
                    }
                ),
          locationSalleItem.findOrCreate({
                    where: {id: 3},
                    defaults: 
                        {
                            name         :     "de la Gare",
                            address      :     "Rue de la Gare à 7090 Hennuyères",
                            phone        :     "067 / 63 72 56",
                            info         :     "Capacité de 50 personnes"
                            
                        },
                    }
                )
  });

const chalk = require('chalk')
  
locationSalleItem.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'locationSalleItem'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);

  return locationSalleItem;
  
};