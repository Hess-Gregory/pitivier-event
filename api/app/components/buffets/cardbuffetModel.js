"use strict";

module.exports = (sequelize, DataTypes) => {
    const CardBuffet = sequelize.define("cardBuffet", {
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      icon: {
        type: DataTypes.STRING
      },
      visible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {timestamps: false}
    );
const chalk = require('chalk')
  
CardBuffet.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'CardBuffet'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
    return CardBuffet;
  };