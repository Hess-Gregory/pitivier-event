/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const navbar  = sequelize.define
    ("navbar",
        { 
            id: 
                {
                    autoIncrement: true,
                    type:DataTypes.INTEGER,
                    autoIncrement:true,
                    allowNull:false,
                    primaryKey:true
                },
            name: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate:{notNull:{msg: 'Le champ "nom" est obligatoire !'}}
                },
            path: 
                {
                    type: DataTypes.STRING
                },
            component_name: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate:{notNull:{msg: 'Le champ "email" est obligatoire !'}}
                },
            component_import: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate:{notNull:{msg: 'Le champ "email" est obligatoire !'}}
                },
            isHome: 
                {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false
                },
            exact: 
                {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false
                }
        },
        {tableName:"navbar", timestamps: false}
    );

    navbar.sync().then(() => { 
            navbar.findOrCreate({
                        where: {id: 1},
                        defaults: 
                            {
                                name                : "Home",
                                path                : "/",
                                component_name      : "Home",
                                component_import    : "pages/Home",
                                isHome              :  true,
                                exact               :  true
                            },
                    });
            navbar.findOrCreate({
                        where: {id: 2},
                        defaults:
                            {
                                name                : "A Propos",
                                path                : "/about",
                                component_name      : "About",
                                component_import    : "pages/About",
                                isHome              :  false,
                                exact               :  false
                            },
                    });
            navbar.findOrCreate({
                        where: {id: 3},
                        defaults:
                            {
                                name                : "Carte",
                                path                : "/menu",
                                component_name      : "Menu",
                                component_import    : "pages/Cards",
                                isHome              :  false,
                                exact               :  false
                            },
                    });
            navbar.findOrCreate({
                        where: {id: 4},
                        defaults:
                            {
                                name                : "Buffet",
                                path                : "/buffet",
                                component_name      : "Buffet",
                                component_import    : "pages/Buffets",
                                isHome              :  false,
                                exact               :  false
                            },
                    });
            navbar.findOrCreate({
                        where: {id: 5},
                        defaults:
                            {
                                name                : "Gallerie",
                                path                : "/gallery",
                                component_name      : "Gallery",
                                component_import    : "pages/Gallery",
                                isHome              :  false,
                                exact               :  false
                            },
                    });
            // navbar.findOrCreate({
            //             where: {id: 6},
            //             defaults: 
            //                 {
            //                     name                : "Blog",
            //                     path                : "/blog",
            //                     component_name      : "Blog",
            //                     component_import    : "pages/Blog",
            //                     isHome              :  false,
            //                     exact               :  false
            //                 },
            //         });
            navbar.findOrCreate({
                where: {id: 6},
                defaults: 
                    {
                        name                : "Location",
                        path                : "/locations",
                        component_name      : "Blog",
                        component_import    : "pages/Location",
                        isHome              :  false,
                        exact               :  false
                    },
            });            
        navbar.findOrCreate({
                    where: {id: 7},
                    defaults: 
                        {
                            name                : "Contactez-nous",
                            path                : "/contact",
                            component_name      : "Contact",
                            component_import    : "pages/Contact",
                            isHome              :  false,
                            exact               :  false
                        },
                });
        navbar.findOrCreate({
                    where: {id: 8},
                    defaults: 
                        {
                            name                : "Page 404",
                            path                : "",
                            component_name      : "NotFound",
                            component_import    : "pages/NotFound",
                            isHome              :  false,
                            exact               :  false
                        },
                });                            
    });
  
const chalk = require('chalk')
  
//navbar.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'navbar'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);    
return navbar;

};



