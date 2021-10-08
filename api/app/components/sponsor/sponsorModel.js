/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const sponsor  = sequelize.define
  ("sponsor",
        { 
            id: 
                {
                    type:DataTypes.INTEGER,
                    autoIncrement:true,
                    allowNull:false,
                    primaryKey:true
                },
            image: 
                {
                    type: DataTypes.STRING,
                },
            title: 
                {
                    type: DataTypes.STRING(45)
                },
            alt: 
                {
                    type: DataTypes.STRING(100)
                },
            url: 
                {
                    type: DataTypes.STRING
                }
            },
            { tableName:"sponsor", timestamps: false }
    );

    sponsor.sync().then(() => {
        sponsor.findOrCreate({
                where: {id: 1},
                defaults: 
                    {
                        image   :   "sponsor_1577963888647.jpg",
                        title  :   "First sponsor",
                        alt :   "picture 1",
                        url :   "http://www.google.com"
                    },
                }
            );
        sponsor.findOrCreate({
                where: {id: 2},
                defaults: 
                    {
                        image   :   "sponsor_1577963926369.jpg",
                        title :   "Second sponsor",
                        alt :   "picture 1",
                        url :   "http://www.google.com"
                    },
                }
            );
        sponsor.findOrCreate({
                where: {id: 3},
                defaults: 
                    {
                        image   :   "sponsor_1577963943054.jpg",
                        title :   "Third sponsor",
                        alt :   "picture 1",
                        url :   "http://www.google.com"
                    },
                }
            );
        sponsor.findOrCreate({
                where: {id: 4},
                defaults: 
                    {
                        image   :   "sponsor_1626570045025.jpg",
                        title :   "Fourth sponsor",
                        alt :   "picture 1",
                        url :   "http://www.google.com"
                    },
                }
            )               
        });
     
const chalk = require('chalk')
  
sponsor.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'sponsor'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);   
return sponsor;
  
};



