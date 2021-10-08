/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const gallery  = sequelize.define
( "gallery",
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
                type: DataTypes.STRING(25)
            },
            visible: {
              type: DataTypes.BOOLEAN,
              defaultValue: true
            }
    },
    {
    tableName:"gallery_list", timestamps: false
    }
);
gallery.sync().then(() => {
    gallery.findOrCreate({
                where: {id: 1},
                defaults: 
                    {
                    name         :   "Break"
                    },
            });
    gallery.findOrCreate({
                where: {id: 2},
                defaults: 
                    {
                      name         :   "Lunch"
                    },
            });
    gallery.findOrCreate({
                where: {id: 3},
                defaults: 
                    {
                      name         :   "Dinner"
                    },
            }); 
    gallery.findOrCreate({
                where: {id: 4},
                defaults: 
                    {
                      name         :   "Dessert"
                    },
            });              
}); 
    
const chalk = require('chalk')
  
// gallery.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'gallery'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
return gallery;

};











