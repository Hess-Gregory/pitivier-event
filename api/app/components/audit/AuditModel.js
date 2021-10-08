/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const audit  = sequelize.define
    ("audit",
        { 
            id: 
                {
                    type:DataTypes.INTEGER,
                    autoIncrement:true,
                    allowNull:false,
                    primaryKey:true
                },
            type: 
                {
                    type: DataTypes.STRING(75)
                },
            model: 
                {
                    type: DataTypes.STRING(45)
                },
            id_model: 
                    {
                        type:DataTypes.INTEGER
                    },
            data: 
                {
                    type: DataTypes.JSON
                },
            by: 
                {
                    type :DataTypes.STRING(45)
                },
            role: 
                {
                    type :DataTypes.STRING(45)
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
        { tableName:"audit" }
    );

  
     
const chalk = require('chalk')
  
audit.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'audit'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);     
return audit;

};