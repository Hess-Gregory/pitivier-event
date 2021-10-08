/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const servicedesc  = sequelize.define
    ( "servicedesc",
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
            image: 
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
        tableName:"servicedesc"
        }
    );

    servicedesc.sync().then(() => {
        servicedesc.findOrCreate({
                    where: {id: 9999},
                    defaults: 
                        {
                        introdesc   :   "Everything You Find In",
                        titledesc   :   "Quality of Service",
                        image       :   "servicedesc_1629026438769.jpg"
                        },
                    }
                );             
    });
     
const chalk = require('chalk')
  
servicedesc.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'servicedesc'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);     
return servicedesc;

};