/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const socmed  = sequelize.define
    ("socmed",
        { 
            id: 
                {
                    type:DataTypes.INTEGER,
                    autoIncrement:true,
                    allowNull:false,
                    primaryKey:true
                },
            name: 
                {
                    type: DataTypes.STRING(150)
                },
            icon: 
                {
                    type: DataTypes.STRING(100)
                },
            url: 
                {
                    type: DataTypes.STRING
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
        { tableName:"socmed" }
    );

    socmed.sync().then(() => {
        socmed.findOrCreate({
                    where: {id: 1},
                    defaults: 
                        {
                        name    :   "Facebook",
                        icon    :   "fab fa-facebook-f",
                        url     :   "https://www.facebook.com/"
                        },
                    });
        socmed.findOrCreate({
                    where: {id: 2},
                    defaults: 
                        {
                        name    :   "Twitter",
                        icon    :   "fab fa-twitter",
                        url     :   "https://twitter.com/"
                        },
                    });
        socmed.findOrCreate({
                    where: {id: 3},
                    defaults: 
                        {
                        name    :   "Linkedin",
                        icon    :   "fab fa-linkedin",
                        url     :   "https://www.linkedin.com/"
                        },
                    });             
    });
     
const chalk = require('chalk')
  
socmed.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'socmed'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);     
return socmed;

};