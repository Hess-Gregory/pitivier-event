/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const testimonydesc  = sequelize.define
    ( "testimonydesc",
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
        tableName:"testimonydesc"
        }
    );

    testimonydesc.sync().then(() => {
        testimonydesc.findOrCreate({
                    where: {id: 9999},
                    defaults: 
                        {
                        titledesc   :   "Clients Feedback",
                        introdesc    :   "Testimonials"
                        },
                    }
                );             
    });
     
const chalk = require('chalk')
  
testimonydesc.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'testimonydesc'"), 
      chalk.yellowBright("vient d'être (re)créée !")
); 
return testimonydesc;

};