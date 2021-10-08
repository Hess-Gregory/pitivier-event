"use strict";

module.exports = (sequelize, DataTypes) => {
    const buffet = sequelize.define("buffet", {
      name: {
        type: DataTypes.STRING(60)
      },
      text: {
        type: DataTypes.STRING(2000)
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: null
      },
      unite: {
        type: DataTypes.STRING(70)
      },
      image: {
        type: DataTypes.STRING
      },
      alt: {
        type: DataTypes.STRING
      },
      visible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    { timestamps: false}
    
    );
const chalk = require('chalk')
  
//buffet.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'buffet'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
    return buffet;
  };