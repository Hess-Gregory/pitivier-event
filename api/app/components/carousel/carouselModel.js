/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const carousel  = sequelize.define
  ("carousel",
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
            tagline: 
                {
                    type: DataTypes.STRING(2000)
                },
            tagdesc: 
                {
                    type: DataTypes.STRING(2000)
                }
            },
            { tableName:"carousel", timestamps: false }
    );

    carousel.sync().then(() => {
        carousel.findOrCreate({
                where: {id: 1},
                defaults: 
                    {
                        image   :   "carousel_1577963888647.jpg",
                        tagline  :   "First carousel",
                        tagdesc :   "<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>"
                    },
                }
            );
        carousel.findOrCreate({
                where: {id: 2},
                defaults: 
                    {
                        image   :   "carousel_1577963926369.jpg",
                        tagline :   "Second carousel",
                        tagdesc :   "<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>"
                    },
                }
            );
        carousel.findOrCreate({
                where: {id: 3},
                defaults: 
                    {
                        image   :   "carousel_1577963943054.jpg",
                        tagline :   "Third carousel",
                        tagdesc :   "<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>"
                    },
                }
            );
        carousel.findOrCreate({
                where: {id: 4},
                defaults: 
                    {
                        image   :   "carousel_1626570045025.jpg",
                        tagline :   "Fourth carousel",
                        tagdesc :   "<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>"
                    },
                }
            )               
        });

const chalk = require('chalk')
  
carousel.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'carousel'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
return carousel;
  
};



