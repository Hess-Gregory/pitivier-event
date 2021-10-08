/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const buffetdesc  = sequelize.define
    ( "buffetdesc",
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
        {tableName:"buffetdesc", timestamps: false}
    );

    buffetdesc.sync().then(() => {
        buffetdesc.findOrCreate({
                    where: {id: 1},
                    defaults: 
                        {
                        introdesc   :   "Tasty & Spicy Recipes",
                        titledesc   :   "Our buffet"
                        },
                    }
                );             
    });
const chalk = require('chalk')
  
buffetdesc.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'buffetdesc'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
return buffetdesc;

};