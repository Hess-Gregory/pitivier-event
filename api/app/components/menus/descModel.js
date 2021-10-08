/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const menudesc  = sequelize.define
    ( "menudesc",
        { 
            id: 
                {
                    type:DataTypes.INTEGER,
                    autoIncrement:true,
                    allowNull:false,
                    primaryKey:true
                },
            titledesc: 
                {
                    type: DataTypes.STRING(35)
                },
            introdesc: 
                {
                    type: DataTypes.STRING(50)
                }
        },
        {tableName:"menudesc", timestamps: false}
    );

    menudesc.sync().then(() => {
        menudesc.findOrCreate({
                    where: {id: 1},
                    defaults: 
                        {
                        introdesc   :   "Tasty & Spicy Recipes",
                        titledesc   :   "Our Menu"
                        },
                    }
                );             
    });

const chalk = require('chalk')
  
menudesc.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'menudesc'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
return menudesc;

};