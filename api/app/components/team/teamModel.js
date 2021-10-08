/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const team  = sequelize.define
    ("team",
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
                    type: DataTypes.STRING(100)
                },
            image: 
                {
                    type: DataTypes.STRING
                },
            alt: 
                {
                    type: DataTypes.STRING(2000)
                },
            position: 
                {
                    type: DataTypes.STRING(100)
                },
            quote: 
                {
                    type: DataTypes.STRING(2000)
                },
            facebook:
                {
                type: DataTypes.STRING(100),
                defaultValue: "https://www.facebook.com/"
                },
            lindekin:
                {
                type: DataTypes.STRING(100),
                defaultValue: "https://fr.linkedin.com/"
                },
            twitter:
                {
                type: DataTypes.STRING(100),
                defaultValue: "https://twitter.com/"
                }
        },
        { tableName:"team", timestamps: false }
    );

    team.sync().then(() => {
        team.findOrCreate({
                    where: {id: 1},
                    defaults: 
                        {
                        name         :   "Ava Farrington",
                        position     :   "Head Chef, Smyth",
                        image        :   "team-1.jpg",
                        quote        :   "quote team"
                        },
                });
        team.findOrCreate({
                    where: {id: 2},
                    defaults: 
                        {
                        name         :   "Kevin Haley",
                        position     :   "Executive Chef",
                        image        :   "team-2.jpg",
                        quote        :   "quote team 1"
                        },
                });
        team.findOrCreate({
                    where: {id: 3},
                    defaults: 
                        {
                        name         :   "Alishia Fulton",
                        position     :   "Executive Pastry Chef",
                        image        :   "team-3.jpg",
                        quote        :   "quote team 2"
                        },
                });  
        team.findOrCreate({
                    where: {id: 4},
                    defaults: 
                        {
                        name         :   "Stevie Wills",
                        position     :   "Executive Sous Chef",
                        image        :   "team-4.jpg",
                        quote        :   "quote team 3"
                        },
                });                
    }); 
     
const chalk = require('chalk')
  
team.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'team'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);   
return team;

};