/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const media  = sequelize.define
  ("media",
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
          type: DataTypes.STRING
        },
      alt: 
        {
          type: DataTypes.STRING
        },
        visible: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
        }
    },
    { tableName:"gallery_media", timestamps: false}
  );
  media.sync().then(() => {
    media.findOrCreate({
                where: {id: 1},
                defaults: 
                    {
                    image         :   "gallery-1.jpg",
                    alt           :   "gallery-1"
                    },
            });
    media.findOrCreate({
                where: {id: 2},
                defaults: 
                    {
                      image         :   "gallery-2.jpg",
                      alt           :   "gallery-2"
                    },
            });
    media.findOrCreate({
                where: {id: 3},
                defaults: 
                    {
                      image         :   "gallery-3.jpg",
                      alt           :   "gallery-3"
                    },
            }); 
    media.findOrCreate({
                where: {id: 4},
                defaults: 
                    {
                      image         :   "gallery-4.jpg",
                      alt           :   "gallery-4"
                    },
            });
    media.findOrCreate({
                where: {id: 5},
                defaults: 
                    {
                      image         :   "gallery-5.jpg",
                      alt           :   "gallery-5"
                    },
            }); 
    media.findOrCreate({
                where: {id: 6},
                defaults: 
                    {
                      image         :   "gallery-6.jpg",
                      alt           :   "gallery-6"
                    },
            });                  
}); 
    
const chalk = require('chalk')
  
// media.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'media'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
return media;

};