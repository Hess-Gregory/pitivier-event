/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const gallerydesc  = sequelize.define
    ( "gallerydesc",
        { 
            id: 
                {
                    type:DataTypes.INTEGER,
                    primaryKey:true
                },
            titledesc: 
                {
                    type: DataTypes.STRING(150)
                },
            introdesc: 
                {
                    type: DataTypes.STRING(2000)
                }
        },
        {
        tableName:"gallerydesc", timestamps: false
        }
    );

    gallerydesc.sync().then(() => {
        gallerydesc.findOrCreate({
                    where: {id: 9999},
                    defaults: 
                        {
                        titledesc   :   "Resturant Gallery",
                        introdesc    :   "Delicious Food Gallery"
                        },
                    }
                );             
    });
        
const chalk = require('chalk')
  
gallerydesc.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'gallerydesc'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
return gallerydesc;

};