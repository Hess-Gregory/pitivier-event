/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const teamdesc  = sequelize.define
    ( "teamdesc",
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
                },
            createdAt: 
                {
                    type: 'TIMESTAMP',
                    defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
                    allowNull: false
                },
            updatedAt: 
                {
                    type: 'TIMESTAMP',
                    defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
                    allowNull: false
                }
        },
        {
        tableName:"teamdesc"
        }
    );

    teamdesc.sync().then(() => {
        teamdesc.findOrCreate({
                    where: {id: 9999},
                    defaults: 
                        {
                        titledesc   :   "Expert Chefs",
                        introdesc    :   "Team Members"
                        },
                    }
                );             
    });
     
const chalk = require('chalk')
  
teamdesc.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'teamdesc'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);   
return teamdesc;

};