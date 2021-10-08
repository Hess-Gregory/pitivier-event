/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const inbox  = sequelize.define
    ("inbox",
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
            mail: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate:{notNull:{msg: 'Le champ "email" est obligatoire !'}}
                },
            message: 
                {
                    type: DataTypes.STRING(2000),
                    allowNull: false, 
                    validate:{notNull:{msg: 'Le champ "message" est obligatoire !'}}
                },
            page: 
                {
                    type: DataTypes.ENUM('received', 'readed', 'replied'),
                    defaultValue: 'received'
                },
            image: 
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
        {tableName:"inbox"}
    );

    inbox.sync().then(() => { 
        inbox.findOrCreate({
                    where: {id: 1},
                    defaults: 
                        {
                        name    : "Lester A. Rosa",
                        mail    : "LesterARosa@jourrapide.com",
                        message : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        page    : "received"
                        },
                });
        inbox.findOrCreate({
                    where: {id: 2},
                    defaults:
                        {
                        name    : "Kang P'an",
                        mail    : "KangPan@teleworm.us",
                        message : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        page    : "readed"
                        },
                });
        inbox.findOrCreate({
                    where: {id: 3},
                    defaults: 
                        {
                        name    : "Aimée Austin",
                        mail    : "AimeeAustin@jourrapide.com",
                        message : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        page    : "replied"
                        },
                });        
    });
        
const chalk = require('chalk')
  
inbox.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'inbox'"), 
      chalk.yellowBright("vient d'être (re)créée !")
); 
return inbox;

};



