/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const navbarsub  = sequelize.define
    ("navbarsub",
        { 
            id: 
                {
                    autoIncrement: true,
                    type:DataTypes.INTEGER,
                    autoIncrement:true,
                    allowNull:false,
                    primaryKey:true
                },
            name: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate:{notNull:{msg: 'Le champ "nom" est obligatoire !'}}
                },
            path: 
                {
                    type: DataTypes.STRING
                },
            component_name: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate:{notNull:{msg: 'Le champ "email" est obligatoire !'}}
                },
            component_import: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate:{notNull:{msg: 'Le champ "email" est obligatoire !'}}
                },
            exact: 
                {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false
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
        {tableName:"navbarsub"}
    );

    // navbarsub.sync().then(() => { 
    //     navbarsub.findOrCreate({
    //                 where: {id: 1},
    //                 defaults: 
    //                     {
    //                     name    : "Lester A. Rosa",
    //                     url    : "LesterARosa@jourrapide.com"
    //                     },
    //             });
    //     navbarsub.findOrCreate({
    //                 where: {id: 2},
    //                 defaults:
    //                     {
    //                     name    : "Kang P'an",
    //                     mail    : "KangPan@teleworm.us"
    //                     },
    //             });
    //     navbarsub.findOrCreate({
    //                 where: {id: 3},
    //                 defaults: 
    //                     {
    //                     name    : "Aimée Austin",
    //                     mail    : "AimeeAustin@jourrapide.com",
    //                     message : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //                     page    : "replied"
    //                     },
    //             });        
    // });
     
const chalk = require('chalk')
  
//navbarsub.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'navbarsub'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);       
return navbarsub;

};



