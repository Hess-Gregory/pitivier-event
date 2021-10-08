/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const service  = sequelize.define
    ( "service",
        { 
            id: 
                {
                    type:DataTypes.INTEGER,
                    autoIncrement:true,
                    allowNull:false,
                    primaryKey:true
                },
            title: 
                {
                    type: DataTypes.STRING(150)
                },
            icon: 
                {
                    type: DataTypes.STRING(100)
                },
            desc: 
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
        {
        tableName:"service"
        }
    );

    service.sync().then(() => {
        service.findOrCreate({
                    where: {id: 1},
                    defaults: 
                        {
                        title   :   "Dashboard",
                        icon    :   "icon-laptop",
                        desc    :   "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
                        },
                    }
                );
        service.findOrCreate({
                    where: {id: 2},
                    defaults: 
                        {
                        title   :   "Administration",
                        icon    :   "icon-tablet",
                        desc    :   "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
                        },
                    }
                );
        service.findOrCreate({
                    where: {id: 3},
                    defaults: 
                        {
                        title   :   "Make Money",
                        icon    :   "icon-tablet",
                        desc    :   "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
                        },
                    }
                );
        service.findOrCreate({
                    where: {id: 4},
                    defaults: 
                        {
                        title   :   "SEO Monitoring",
                        icon    :   "icon-laptop",
                        desc    :   "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
                        },
                    }
                ); 
        service.findOrCreate({
                    where: {id: 5},
                    defaults: 
                        {
                        title   :   "Online Marketing",
                        icon    :   "icon-line-chart",
                        desc    :   "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
                        },
                    }
                );
        service.findOrCreate({
                    where: {id: 6},
                    defaults: 
                        {
                        title   :   "Service 6",
                        icon    :   "icon-user",
                        desc    :   "description de Service 6"
                        },
                    }
                );                
    });
     
const chalk = require('chalk')
  
service.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'service'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);     
return service;

};