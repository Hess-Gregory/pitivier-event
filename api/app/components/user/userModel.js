/* jshint indent: 2 */
"use strict";
const bcrypt = require('bcryptjs');
const _ = require("lodash");

module.exports = function(sequelize, DataTypes) {
    const users  = sequelize.define("users",
        {
          id: 
            {
              type:DataTypes.INTEGER,
              autoIncrement:true,
              allowNull:false,
              primaryKey:true
            },
          username: 
            {
              type: DataTypes.STRING,
              allowNull: false,
              validate:{notNull:{msg: 'Quel est le nom d\'utilisateur?'}}
            },
          email: 
            {
              type: DataTypes.STRING,
              unique: true,
              lowercase: true,
              allowNull: false,
              validate:{notNull:{msg: 'Quel est l\'adresse mail?'}}
            },
          password: 
            {
              type: DataTypes.STRING,
              allowNull: false,
              validate:{notNull:{msg: 'Quel est le mot de passe?'}}
            },
          role: 
            {
              type: DataTypes.ENUM('Visiteur', 'Modérateur', 'Administrateur'),
              defaultValue: 'Visiteur',
              allowNull: false,
              validate:{notNull:{msg: 'Quelle est la page d\'en-tête ?'}}
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
        {tableName: "users"}
      );

      users.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };
    
      users.prototype.safeModel = function() {
        return _.omit(this.toJSON(), ["password"]);
      };

      users.sync().then(() => {
        users.findOrCreate({
                    where: {id: 1},
                    defaults: 
                        {
                          username  : "Admin",
                          email     : "admin@localhost.com",
                          password  : bcrypt.hashSync("123456", bcrypt.genSaltSync(8), null),
                          role      : "Administrateur"
                        },
                    });
        users.findOrCreate({
                    where: {id: 2},
                    defaults: 
                        {
                          username  : "Mod",
                          email     : "moderateur@localhost.com",
                          password  : bcrypt.hashSync("123456", bcrypt.genSaltSync(8), null),
                          role      : "Modérateur"
                        },
                    });     
        users.findOrCreate({
                    where: {id: 3},
                    defaults: 
                        {
                          username  : "User",
                          email     : "visiteur@localhost.com",
                          password  : bcrypt.hashSync("123456", bcrypt.genSaltSync(8), null),
                          role      : "Visiteur"
                        },
                    });                 
    });
       
const chalk = require('chalk')
  
users.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'users'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);    
return users;

};