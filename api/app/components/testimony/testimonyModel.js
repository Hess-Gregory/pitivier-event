/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
    const testimony  = sequelize.define
    ("testimony",
        { 
            id: 
                {
                    autoIncrement: true,
                    type:DataTypes.INTEGER,
                    autoIncrement:true,
                    allowNull:false,
                    primaryKey:true
                },
            username: 
                {
                    type: DataTypes.STRING(25)
                },
            position: 
                {
                    type: DataTypes.STRING(35)
                },
            image: 
                {
                    type: DataTypes.STRING
                },
            alt: 
                {
                    type: DataTypes.STRING
                },
            comment: 
                {
                    type: DataTypes.STRING(2000)
                },
            rank: 
                {
                    type: DataTypes.INTEGER,
                    validate: {
                      min: 1,
                      max: 5
                    }
                },
            rankprice: 
                {
                    type: DataTypes.INTEGER,
                    validate: {
                      min: 1,
                      max: 5
                    }
                },
            rankavailable: 
                {
                    type: DataTypes.INTEGER,
                    validate: {
                      min: 1,
                      max: 5
                    }
                },
            rankservice: 
                {
                    type: DataTypes.INTEGER,
                    validate: {
                      min: 1,
                      max: 5
                    }
                },
            rankquality: 
                {
                    type: DataTypes.INTEGER,
                    validate: {
                      min: 1,
                      max: 5
                    }
                },
            visible: 
                {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false
                }
        },
        {
        tableName:"testimony", timestamps: false
        }
    );

    testimony.sync().then(() => {
        testimony.findOrCreate({
                    where: {id: 1},
                    defaults: 
                        {
                        username        :   "Testimony 1",
                        position        :   "SEO",
                        image           :   "testimony_1627678881745.jpg",
                        alt             :   "User 1",
                        comment         :   "testimony comment 1",
                        rank            :   5,
                        rankprice       :   5,
                        rankavailable   :   5,
                        rankservice     :   5,
                        rankquality     :   5,
                        visible         :   true
                        },
                });
        testimony.findOrCreate({
                    where: {id: 2},
                    defaults: 
                        {
                            username    :   "Testimony 2",
                            position        :   "chef",
                            image       :   "testimony_1627678896485.jpg",
                            alt         :   "User 2",
                            comment     :   "testimony comment 2",
                            rank        :   3,
                            rankprice       :   5,
                            rankavailable   :   4,
                            rankservice     :   5,
                            rankquality     :   3,
                            visible         :   true
                        },
                });
        testimony.findOrCreate({
                    where: {id: 3},
                    defaults: 
                        {
                            username    :   "Testimony 3",
                            position        :   "mariage",
                            image       :   "testimony_1627678921459.jpg",
                            alt         :   "User 3",
                            comment     :   "testimony comment 3",
                            rank        :   4,
                            rankprice       :   5,
                            rankavailable   :   4,
                            rankservice     :   5,
                            rankquality     :   2,
                            visible         :   true
                        },
                });
        testimony.findOrCreate({
                    where: {id: 4},
                    defaults: 
                        {
                            username    :   "Testimony 4",
                            position        :   "SEO",
                            image       :   "testimony_1627678940105.jpg",
                            alt         :   "User 4",
                            comment     :   "testimony comment 4",
                            rank        :   5,
                            rankprice       :   4,
                            rankavailable   :   5,
                            rankservice     :   5,
                            rankquality     :   3,
                            visible         :   true
                        },
                }); 
        testimony.findOrCreate({
                    where: {id: 5},
                    defaults: 
                        {
                            username    :   "Testimony 5",
                            position        :   "SEO",
                            image       :   "testimony_1628598182880.jpg",
                            alt         :   "User 5",
                            comment     :   "testimony comment 5",
                            rank        :   1,
                            rankprice       :   1,
                            rankavailable   :   1,
                            rankservice     :   1,
                            rankquality     :   1,
                            visible         :   true
                        },
                });            
    });
     
const chalk = require('chalk')
  
testimony.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'testimony'"), 
      chalk.yellowBright("vient d'être (re)créée !")
); 
return testimony;

};