/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const blog  = sequelize.define(
    "blog",
        { 
            id: 
                {
                    type: DataTypes.INTEGER,
                    autoIncrement:true,
                    allowNull:false,
                    primaryKey:true
                },
            title: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: { notNull: {msg: 'Quelle est le titre ?' }}
                },
            image: 
                { type: DataTypes.STRING},
            alt: 
                { type: DataTypes.STRING},
            content: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate:{notNull: { msg: 'Quel est le contenu ?'}}
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
        {tableName:"blog"}
    );

    blog.sync().then(() => {
    blog.findOrCreate({
                where: {id: 1},
                defaults: 
                    {
                        image       :     "blog_1582734502452.jpg",
                        alt         :     "blog img 1",
                        title       :     "First Blog",
                        content     :     "<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>"
                    },
                });
    blog.findOrCreate({
                where: {id: 2},
                defaults: 
                    {
                        image       :     "blog_1582734568484.jpg",
                        alt         :     "blog img 2",
                        title       :     "Second Blog",
                        content     :     "<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>"
                    },
                });
    blog.findOrCreate({
                where: {id: 3},
                defaults: 
                    {
                        image       :     "blog_1582734601982.jpg",
                        alt         :     "blog img 3",
                        title       :     "Third Blog",
                        content     :     "<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>"
                    },
                });
    blog.findOrCreate({
                where: {id: 4},
                defaults: 
                    {
                        image       :     "blog_1626569802382.jpg",
                        alt         :     "blog img 4",
                        title       :     "Fourth Blog",
                        content     :     "<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>"
                    },
                })               
    });
const chalk = require('chalk')
  
blog.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'blog'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
return blog;
};