/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
    const header  = sequelize.define
    ("header",
        { 
            id: 
                {
                    autoIncrement: true,
                    type:DataTypes.INTEGER,
                    autoIncrement:true,
                    allowNull:false,
                    primaryKey:true
                },
            page: 
                {
                    type: DataTypes.ENUM(          
                        'home',
                        'about',
                        'cartes',
                        'buffets',
                        'galerie',
                        'locations',
                        'evenements',
                        'blog',
                        'blogdetail',
                        'contact',
                        'terms',
                        'privacy'
                    ),
                    defaultValue: 'Blog',
                    allowNull: false,
                    validate:{notNull:{msg: 'Quelle est la page d\'en-tête ?'}}
                },
            image: 
                {
                    type: DataTypes.STRING
                },
            alt: 
                {
                    type: DataTypes.STRING
                },
            tagline: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: { notNull:{msg: 'Quel est le slogan de l\'en-tête ?' } }
                },
            tagdesc: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate:{ notNull:{msg: 'Quelle est la description de l\'en-tête ?'}}
                },
            btn1name: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: { notNull:{msg: 'Quel est le titre du bouton 1 ?' } }
                },
            btn2name: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: { notNull:{msg: 'Quel est le titre du bouton 2 ?' } }
                },
            btn1url: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: { notNull:{msg: 'Quel est le lien du bouton 1  ?' } }
                },
            btn2url: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: { notNull:{msg: 'Quel est le lien du bouton 2  ?' } }
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
        {tableName:"header"}
    );

    header.sync().then(() => {
        header.findOrCreate({
                    where: {id: 1},
                    defaults: 
                        {
                        page    :   "home",
                        image   :   "header_1629026438769.jpg",
                        alt     :   "SEO Image home page du site",
                        tagline :   "Fine Dinning",
                        tagdesc :   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, magna aliqua. ipsum is simply dummy text of the printing.",
                        btn1name:   "Our Menu",
                        btn2name:   "Book A Table",
                        btn1url:   "/",
                        btn2url:   "/"
                        },
                });              
    });
        
const chalk = require('chalk')
  
header.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'header'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
return header;
};