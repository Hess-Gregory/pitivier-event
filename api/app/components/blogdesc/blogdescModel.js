/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const blogdesc  = sequelize.define
    ( "blogdesc",
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
                }
        },
        {
        tableName:"blogdesc", timestamps: false
        }
    );

    blogdesc.sync().then(() => {
        blogdesc.findOrCreate({
                    where: {id: 9999},
                    defaults: 
                        {
                        titledesc   :   "Our Blog & Event",
                        introdesc    :   "Latest News At Vegan"
                        },
                    }
                );             
    });
const chalk = require('chalk')
  
blogdesc.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'blogdesc'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
return blogdesc;

};