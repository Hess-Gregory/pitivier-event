/* jshint indent: 2 */
"use strict";

module.exports = function(sequelize, DataTypes) {
  const about  = sequelize.define("about",
    { 
      image: 
        {
          type: DataTypes.STRING
        }, 
      alt: 
        {
          type: DataTypes.STRING
        },   
      image1: 
        {
          type: DataTypes.STRING
        },
      alt1: 
        {
          type: DataTypes.STRING
        }, 
      image2: 
        {
          type: DataTypes.STRING
        },
      alt2: 
        {
          type: DataTypes.STRING
        }, 
      image3: 
        {
          type: DataTypes.STRING
        },
      alt3: 
        {
          type: DataTypes.STRING
        }, 
      image4: 
        {
          type: DataTypes.STRING
        },
      alt4: 
        {
          type: DataTypes.STRING
        }, 
      title: 
        {
          type: DataTypes.STRING(20)
        },
      subtitle: 
        {
          type: DataTypes.STRING(50)
        },
      desc: 
        {
          type: DataTypes.STRING(2000)
        },
      bouton:
        {
          type: DataTypes.STRING(10)
        }
    },
    { tableName:"about", timestamps: false}
  );

  about.sync().then(() => {
    about.findOrCreate({
              where: {id: 1},
              defaults: 
                  {
                      image         :     "about-1.jpg",
                      alt           :     "about",
                      image1        :     "about-1.jpg",
                      alt1          :     "about 1",
                      image2        :     "about-2.jpg",
                      alt2          :     "about 2",
                      image3        :     "about-3.jpg",
                      alt3          :     "about 3",
                      image4        :     "about-4.jpg",
                      alt4          :     "about 4",
                      title         :     "Our Story",
                      subtitle      :     "Welcome to Vegan Resturant",
                      desc          :     "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur adipiscing adipiscing elit.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur adipiscing incididunt ut labore et dolore elit.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur adipiscing elit.</p>",
                      bouton        :     "Read More"
                      
                  },
              }
          )
  });
const chalk = require('chalk')
  
about.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'About'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
    
  return about;
  
};